import { AggregateResult } from "@analytics-shared/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { BarChartComponent } from "./BarChart.component";
import { BarChartProps, IBarChartInputProps, IBarChartProps } from "./BarChart.d";
import { BarChartPropEditor } from "./BarChart.props";
import icon from './icon.svg';

const injectBarChartProps = createInjector(({ options }: IBarChartInputProps): IBarChartProps => {
    const [results, setResults] = useState<AggregateResult[]>([]);
    const loader = useLoaderAsync();

    useEffect(() => {
        loader(() => services().analytics.get(options).then(setResults));
    }, [options]);

    return { results, isLoading: loader.isLoading };
});

const connect = inject<IBarChartInputProps, BarChartProps>(mergeProps(
    injectBarChartProps,
));
export const connectBarChart = connect;

export const BarChart = withLayoutMetadata(
    overridable<IBarChartInputProps>(connect(BarChartComponent)),
    {
        name: "BarChart",
        displayName: "BarChart",
        category: "",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: BarChartPropEditor,
    }
);
