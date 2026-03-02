import { AggregateResult, AnalyticsOptions, NewAnalyticsEvent } from "@analytics-shared/types";
import { IMethods } from "@core/lib/types";
import { getResults } from "@core/lib/util";

export const analyticsServices = ({ get, post }: IMethods) => ({
    analytics: {
        track: (event: NewAnalyticsEvent) => post("analytics/track", event).then(getResults),
        get: (options: AnalyticsOptions): Promise<AggregateResult[]> => get("analytics/aggregate", options).then(getResults),
    },
})