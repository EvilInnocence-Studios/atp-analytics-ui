import { IBarChartInputProps } from "./BarChart.d";

export const BarChartPropEditor = (
    { }: IBarChartInputProps,
    _updateProps: (props: any) => void,
    _updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for BarChart
        </div>
    );
}
