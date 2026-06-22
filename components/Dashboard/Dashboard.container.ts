import { overridable } from "@core/lib/overridable";
import { useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { DashboardComponent } from "./Dashboard.component";
import { DashboardProps, IDashboardInputProps, IDashboardProps } from "./Dashboard.d";

const injectDashboardProps = createInjector(({}:IDashboardInputProps):IDashboardProps => {
    const [dates, setDates] = useState<[string, string] | null>(null);

    return {
        dates,
        setDates,
    };
});

const connect = inject<IDashboardInputProps, DashboardProps>(mergeProps(
    injectDashboardProps,
));
export const connectDashboard = connect;

export const Dashboard = overridable<IDashboardInputProps>(connect(DashboardComponent));
