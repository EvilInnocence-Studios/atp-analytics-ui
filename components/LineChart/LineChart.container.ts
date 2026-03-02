import { AggregateResult } from "@analytics-shared/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { LineChartComponent } from "./LineChart.component";
import { LineChartProps, ILineChartInputProps, ILineChartProps } from "./LineChart.d";
import { LineChartPropEditor } from "./LineChart.props";
import icon from './icon.svg';

const injectLineChartProps = createInjector(({ options }: ILineChartInputProps): ILineChartProps => {
    const [results, setResults] = useState<AggregateResult[]>([]);
    const loader = useLoaderAsync();

    useEffect(() => {
        loader(() => services().analytics.get(options).then(setResults));
    }, [options]);

    return { results, isLoading: loader.isLoading };
});

const connect = inject<ILineChartInputProps, LineChartProps>(mergeProps(
    injectLineChartProps,
));
export const connectLineChart = connect;

export const LineChart = withLayoutMetadata(
    overridable<ILineChartInputProps>(connect(LineChartComponent)),
    {
        name: "LineChart",
        displayName: "LineChart",
        category: "",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: LineChartPropEditor,
    }
);
