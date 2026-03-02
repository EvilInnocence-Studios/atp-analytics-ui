import { AggregateResult } from "@analytics-shared/types";
import { services } from "@core/lib/api";
import { overridable } from "@core/lib/overridable";
import { useLoaderAsync } from "@core/lib/useLoader";
import { withLayoutMetadata } from "@theming/lib/layout/componentRegistry";
import { useEffect, useState } from "react";
import { createInjector, inject, mergeProps } from "unstateless";
import { ChartComponent } from "./Chart.component";
import { ChartProps, IChartInputProps, IChartProps } from "./Chart.d";
import { ChartPropEditor } from "./Chart.props";
import icon from './icon.svg';

const injectChartProps = createInjector(({ options }: IChartInputProps): IChartProps => {
    const [results, setResults] = useState<AggregateResult[]>([]);
    const loader = useLoaderAsync();

    useEffect(() => {
        loader(() => services().analytics.get(options).then(setResults));
    }, [options]);

    return { results, isLoading: loader.isLoading };
});

const connect = inject<IChartInputProps, ChartProps>(mergeProps(
    injectChartProps,
));
export const connectChart = connect;

export const Chart = withLayoutMetadata(
    overridable<IChartInputProps>(connect(ChartComponent)),
    {
        name: "Chart",
        displayName: "Chart",
        category: "",
        description: "",
        icon,
        getSlotDisplayName: (slotName, props) => props[slotName] || slotName,
        propEditor: ChartPropEditor,
    }
);
