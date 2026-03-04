import { overridable } from "@core/lib/overridable";
import { Spin } from "antd";
import clsx from "clsx";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { LineChartProps } from "./LineChart.d";
import styles from './LineChart.module.scss';

export const LineChartComponent = overridable(({
    results, isLoading, label, renderTick,
    classes = styles, className, css,
}: LineChartProps) => <Spin spinning={isLoading}>
        {css && <style>{css}</style>}
        {label && <h2 className={classes.label}>{label}</h2>}
        <ResponsiveContainer width="100%" height={300}>
            <LineChart className={clsx(className, classes.chart)} data={results} >
                <XAxis dataKey="label" tickFormatter={renderTick} />

                <Line dataKey="views" yAxisId="views" type="monotone" stroke="#8884d8" />
                <YAxis yAxisId="views" orientation="left" label={{ value: "Views", angle: -90, position: "insideLeft" }} />

                <Line dataKey="uniqueUsers" yAxisId="users" type="monotone" stroke="#82ca9d" />
                <YAxis yAxisId="users" orientation="right" label={{ value: "Unique Users", angle: 90, position: "insideRight" }} />

                <Tooltip />
                <Legend />
            </LineChart>
        </ResponsiveContainer>
    </Spin>);

