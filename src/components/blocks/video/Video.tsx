"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import './video.scss';

// Dynamically import ReactPlayer (client-side only)
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

export default function YouTubePlayer({ videoUrl }: { videoUrl: string }) {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="position-relative ratio ratio-16x9 video-wrapper rounded-md">
            {!playing && (
                <div style={{ zIndex: 2 }}>
                    <div className="video-intro position-absolute">
                        <h3 className="display-2 ls-xs mb-8">
                            Discover Matrix
                        </h3>
                        <p>
                            Discover how Matrix Pvt Ltd is shaping the future with innovation and excellence. Watch our story unfold and see how we bring ideas to life through cutting-edge solutions and a commitment to quality.
                        </p>
                        <a

                            onClick={() => setPlaying(true)}
                            className="btn btn-circle btn-def btn-play ripple mx-auto mb-6"
                        >
                            <i className="icn-caret-right" />
                        </a>
                    </div>
                    <img
                        src={`/img/photos/automation-technology-use-cases.jpg`}
                        alt="Video Thumbnail"
                        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded cursor-pointer"
                        onClick={() => setPlaying(true)}
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
