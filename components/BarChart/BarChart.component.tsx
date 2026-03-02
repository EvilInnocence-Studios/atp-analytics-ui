import { overridable } from "@core/lib/overridable";
import { Spin } from "antd";
import clsx from "clsx";
import { Bar, BarChart as RechartsBarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { BarChartProps } from "./BarChart.d";
import styles from './BarChart.module.scss';

export const BarChartComponent = overridable(({
    results, isLoading, label,
    classes = styles, className, css,
}: BarChartProps) => <Spin spinning={isLoading}>
        {css && <style>{css}</style>}
        {label && <h2 className={classes.label}>{label}</h2>}
        <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart layout="vertical" className={clsx(className, classes.chart)} data={results}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="label" width={300} />
                <Tooltip />
                <Legend />
                <Bar dataKey="views" name="Views" fill="#8884d8" />
                <Bar dataKey="uniqueUsers" name="Users" fill="#82ca9d" />
            </RechartsBarChart>
        </ResponsiveContainer>
    </Spin>);

