export declare interface IDashboardProps {
    dates: [string, string] | null;
    setDates: (dates: [string, string] | null) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IDashboardInputProps {
    classes?: any;
}

export type DashboardProps = IDashboardInputProps & IDashboardProps;