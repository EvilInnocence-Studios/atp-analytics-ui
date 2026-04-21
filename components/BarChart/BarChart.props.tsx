import { Form, InputNumber, Select } from "antd";
import { IBarChartInputProps } from "./BarChart.d";

export const BarChartPropEditor = (
    { pageSize, sortBy }: IBarChartInputProps,
    _updateProps: (props: any) => void,
    updateProp: (prop: string) => (value: any) => void
) => {
    return (
        <Form layout="vertical">
            <Form.Item label="Row Count">
                <InputNumber
                    value={pageSize || 10}
                    onChange={updateProp("pageSize")}
                    min={1}
                />
            </Form.Item>
            <Form.Item label="Default Sort By">
                <Select
                    value={sortBy || 'views'}
                    onChange={updateProp("sortBy")}
                >
                    <Select.Option value="views">Views</Select.Option>
                    <Select.Option value="uniqueUsers">Users</Select.Option>
                </Select>
            </Form.Item>
        </Form>
    );
}
