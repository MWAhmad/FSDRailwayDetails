import { FareTable } from "./FareDetails"
import { TimeTable } from "./TimeDetails"

export interface Train {
    id: string,
    name: string,
    timings: TimeTable,
    prices: FareTable
}