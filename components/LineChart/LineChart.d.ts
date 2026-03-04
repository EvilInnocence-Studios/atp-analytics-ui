import { AggregateResult, AnalyticsOptions } from "@analytics-shared/types";
import { XAxisTickContentProps } from "recharts";

export declare interface ILineChartProps {
    results: AggregateResult[];
    isLoading: boolean;
}

// What gets passed into the component from the parent as attributes
export declare interface ILineChartInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    label: string;
    options: AnalyticsOptions;
    renderTick?: (label: string | number | Date) => string;
}

export type LineChartProps = ILineChartInputProps & ILineChartProps;
