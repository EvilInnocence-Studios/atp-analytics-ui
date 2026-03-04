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
        <div className={clsx(className, classes.chart)}>
            {label && <h2 className={classes.label}>{label}</h2>}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={results} >
                    <XAxis
                        dataKey="label"
                        tickFormatter={renderTick}
                    />

                    <Line name="Views" dataKey="views" yAxisId="views" type="monotone" stroke="#8884d8" />
                    <YAxis
                        yAxisId="views"
                        orientation="left"
                        stroke="#8884d8"
                    />

                    <Line name="Users" dataKey="uniqueUsers" yAxisId="users" type="monotone" stroke="#82ca9d" />
                    <YAxis
                        yAxisId="users"
                        orientation="right"
                        stroke="#82ca9d"
                    />

                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </Spin>);

