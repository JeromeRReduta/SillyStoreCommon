export interface Order {
    readonly id: number;
    readonly dateStr: string;
    readonly note?: string;
    readonly userId: number;
}
