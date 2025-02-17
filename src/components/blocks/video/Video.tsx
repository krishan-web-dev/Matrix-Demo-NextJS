"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer (client-side only)
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

export default function YouTubePlayer({ videoUrl }: { videoUrl: string }) {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="position-relative ratio ratio-16x9 video-wrapper">
            {!playing && (
                <div style={{ zIndex: 2 }}>
                    <a

                        onClick={() => setPlaying(true)}
                        className="btn btn-circle btn-def btn-play ripple mx-auto mb-6 position-absolute"
                        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 3 }}>
                        <i className="icn-caret-right" />
                    </a>
                    <img
                        src={`/img/photos/automation-technology-use-cases.jpg`}
                        alt="Video Thumbnail"
                        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded cursor-pointer"

                    />
                </div>
            )}
            <ReactPlayer url={videoUrl} playing={playing} controls width="100%" height="100%" />
        </div>
    );
}

// Helper function to extract the YouTube Video ID from a URL
function getYouTubeID(url: string) {
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : "";
}
