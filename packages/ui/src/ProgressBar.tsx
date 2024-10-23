// ProgressBar.tsx
"use client"; // Ensure this is a client component

import { useEffect } from "react";
import Router from "next/router"; // Use this for page transitions
import NProgress from "nprogress"; // Import nprogress

export const ProgressBar = () => {
    useEffect(() => {
        const handleStart = () => NProgress.start(); // Start the progress bar
        const handleStop = () => NProgress.done(); // Stop the progress bar

        Router.events.on("routeChangeStart", handleStart);
        Router.events.on("routeChangeComplete", handleStop);
        Router.events.on("routeChangeError", handleStop);

        // Cleanup event listeners on unmount
        return () => {
            Router.events.off("routeChangeStart", handleStart);
            Router.events.off("routeChangeComplete", handleStop);
            Router.events.off("routeChangeError", handleStop);
        };
    }, []);

    return null; // This component doesn't render anything
};
