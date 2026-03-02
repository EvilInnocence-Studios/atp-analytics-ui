import { services } from "@core/lib/api";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Analytics: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        console.log("Analytics tracking");
        const screen = window.screen;

        const info = {
            url: location.pathname + location.search,
            host: window.location.host,
            referrer: document.referrer,
            screenWidth: screen.width,
            screenHeight: screen.height,
        };
        console.log(info);
        services().analytics.track(info)
            .then((res: any) => console.log("Analytics track response:", res))
            .catch((err: any) => console.error("Analytics track error:", err));
    }, [location]);

    return null;
};
