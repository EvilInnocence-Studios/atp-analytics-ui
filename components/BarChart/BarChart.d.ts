import { AggregateResult, AnalyticsOptions } from "@analytics-shared/types";

export declare interface IBarChartProps {
    results: AggregateResult[];
    isLoading: boolean;
    pageSize?: number;
    sortBy?: 'views' | 'uniqueUsers';
}

// What gets passed into the component from the parent as attributes
export declare interface IBarChartInputProps {
    className?: string;
    css?: string;
    classes?: any;
    slots?: Index<ILayoutComponent[]>;
    __layoutId?: string;
    label: string;
    options: AnalyticsOptions;
    pageSize?: number;
    sortBy?: 'views' | 'uniqueUsers';
}

export type BarChartProps = IBarChartInputProps & IBarChartProps;
