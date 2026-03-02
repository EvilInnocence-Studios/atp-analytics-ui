import { IChartInputProps } from "./Chart.d";

export const ChartPropEditor = (
    {}: IChartInputProps,
    updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for Chart
        </div>
    );
}
