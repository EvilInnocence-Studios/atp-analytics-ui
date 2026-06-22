import { overridable } from "@core/lib/overridable";
import { Col, DatePicker, Row, Typography } from "antd";
import { BarChart } from "../BarChart";
import { LineChart } from "../LineChart";
import { DashboardProps } from "./Dashboard.d";
import styles from './Dashboard.module.scss';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeOfDay = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

export const DashboardComponent = overridable(({dates, setDates}:DashboardProps) => {
    const dateRange = dates ? { startDate: dates[0], endDate: dates[1] } : {};

    return <>
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography.Title level={2} style={{ margin: 0 }}>Analytics Dashboard</Typography.Title>
            <DatePicker.RangePicker
                onChange={(_dates, dateStrings) => setDates(dateStrings[0] && dateStrings[1] ? [dateStrings[0], dateStrings[1]] : null)}
            />
        </div>
        <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
                <LineChart
                    className={styles.chart}
                    options={{ dimension: 'day', ...dateRange }}
                    label="Daily Visitors"
                    renderTick={(date: string | number | Date) => {
                        const day = date.toString().substring(8, 10);
                        const month = date.toString().substring(5, 7);
                        const year = date.toString().substring(0, 4);
                        return `${months[parseInt(month) - 1]} ${day}, ${year}`;
                    }}
                />
            </Col>
            <Col xs={24} lg={12}>
                <LineChart
                    className={styles.chart}
                    options={{ dimension: 'week', ...dateRange }}
                    label="Weekly Visitors"
                    renderTick={(date: string | number | Date) => {
                        const day = date.toString().substring(8, 10);
                        const month = date.toString().substring(5, 7);
                        const year = date.toString().substring(0, 4);
                        return `${months[parseInt(month) - 1]} ${day}, ${year}`;
                    }}
                />
            </Col>
            <Col xs={24} lg={12}>
                <LineChart
                    className={styles.chart}
                    options={{ dimension: 'month', ...dateRange }}
                    label="Monthly Visitors"
                    renderTick={(date: string | number | Date) => {
                        const month = date.toString().substring(5, 7);
                        const year = date.toString().substring(0, 4);
                        return `${months[parseInt(month) - 1]} ${year}`;
                    }}
                />
            </Col>
            <Col xs={24} lg={12}>
                <LineChart
                    className={styles.chart}
                    options={{ dimension: 'dayOfWeek', ...dateRange }}
                    label="Day of Week Visitors"
                    renderTick={(date: string | number | Date) => days[date as number]}
                />
            </Col>
            <Col xs={24} lg={12}>
                <LineChart
                    className={styles.chart}
                    options={{ dimension: 'timeOfDay', ...dateRange }}
                    label="Time of Day Visitors"
                    renderTick={(date: string | number | Date) => timeOfDay[date as number]}
                />
            </Col>
            <Col xs={24} lg={12}>
                <BarChart
                    className={styles.chart}
                    options={{ dimension: 'country', ...dateRange }}
                    label="Country Visitors" />
            </Col>
            <Col xs={24} lg={12}>
                <BarChart
                    className={styles.chart}
                    options={{ dimension: 'page', ...dateRange }}
                    label="Page Visitors" />
            </Col>
            <Col xs={24} lg={12}>
                <BarChart
                    className={styles.chart}
                    options={{ dimension: 'referrer', ...dateRange }}
                    label="Referrer Visitors" />
            </Col>
        </Row>
    </>;
});
