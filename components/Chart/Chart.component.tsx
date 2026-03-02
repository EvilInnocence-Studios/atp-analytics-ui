import { overridable } from "@core/lib/overridable";
import { Spin } from "antd";
import clsx from "clsx";
import { Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import { ChartProps } from "./Chart.d";
import styles from './Chart.module.scss';

export const ChartComponent = overridable(({
    results, isLoading,
    classes = styles, className, css,
}: ChartProps) => <Spin spinning={isLoading}>
        {css && <style>{css}</style>}
        <LineChart className={clsx(className, classes.chart)} responsive data={results}>
            <XAxis dataKey="label" />

            <Line dataKey="views" yAxisId="views" />
            <YAxis yAxisId="views" orientation="left" label="Views" />

            <Line dataKey="uniqueUsers" yAxisId="users" />
            <YAxis yAxisId="users" orientation="right" label="Users" />

            <Legend />
        </LineChart>
    </Spin>);

