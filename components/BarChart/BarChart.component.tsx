import { overridable } from "@core/lib/overridable";
import { Pagination, Radio, Spin } from "antd";
import clsx from "clsx";
import { useMemo, useState } from "react";
import { Bar, BarChart as RechartsBarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { BarChartProps } from "./BarChart.d";
import styles from './BarChart.module.scss';

export const BarChartComponent = overridable(({
    results, isLoading, label, pageSize = 10, sortBy = 'views',
    classes = styles, className, css,
}: BarChartProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [localSort, setLocalSort] = useState<'views' | 'uniqueUsers'>(sortBy);

    const sortedResults = useMemo(() => {
        return [...results].sort((a, b) => (b[localSort] as number) - (a[localSort] as number));
    }, [results, localSort]);

    const paginatedResults = sortedResults.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <Spin spinning={isLoading}>
            {css && <style>{css}</style>}
            <div className={clsx(className, classes.chart)}>
                <div className={classes.header}>
                    {label && <h2 className={classes.label}>{label}</h2>}
                    <div className={classes.controls}>
                        <span className={classes.sortLabel}>Sort by:</span>
                        <Radio.Group
                            value={localSort}
                            onChange={(e) => {
                                setLocalSort(e.target.value);
                                setCurrentPage(1);
                            }}
                            size="small"
                        >
                            <Radio.Button value="views">Views</Radio.Button>
                            <Radio.Button value="uniqueUsers">Users</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={pageSize * 30 + 100}>
                    <RechartsBarChart layout="vertical" data={paginatedResults}>
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="label" width={300} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="views" name="Views" fill="#8884d8" />
                        <Bar dataKey="uniqueUsers" name="Users" fill="#82ca9d" />
                    </RechartsBarChart>
                </ResponsiveContainer>
                {results.length > pageSize && (
                    <div className={classes.pagination}>
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={results.length}
                            onChange={setCurrentPage}
                            showSizeChanger={false}
                        />
                    </div>
                )}
            </div>
        </Spin>
    );
});

