import { services } from "@core/lib/api";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Analytics: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const screen = window.screen;

        const info = {
            url: location.pathname + location.search,
            host: window.location.host,
            referrer: document.referrer,
            screenWidth: screen.width,
            screenHeight: screen.height,
        };

        services().analytics.track(info).then(() => console.log(""));
    }, [location]);

    return null;
};
