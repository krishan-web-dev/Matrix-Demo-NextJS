"use client";

import ReactCountUp, { CountUpProps } from "react-countup";

export default function CountUp(props: CountUpProps) {
  return <ReactCountUp
    {...props}
    duration={2} // Counter animation will complete in 2 seconds
    delay={2}    // Counter will start after 1 second
  />;
}
