import { ILineChartInputProps } from "./LineChart.d";

export const LineChartPropEditor = (
    { }: ILineChartInputProps,
    _updateProps: (props: any) => void,
    _updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <div>
            Placeholder Prop Editor for LineChart
        </div>
    );
}
