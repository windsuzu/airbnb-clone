import { InputRange, StaticRange } from "react-date-range";
import {
    addDays,
    startOfDay,
    startOfWeek,
    endOfWeek,
    isSameDay,
    differenceInCalendarDays,
} from "date-fns";

export const staticRange: StaticRange[] = [
    {
        label: "Today",
        range: () => ({ startDate: new Date(), endDate: new Date() }),
        isSelected: () => false,
    },
    {
        label: "Tomorrow",
        range: () => ({
            startDate: addDays(new Date(), 1),
            endDate: addDays(new Date(), 1),
        }),
        isSelected: () => false,
    },
    {
        label: "This Weekend",
        range: () => ({
            startDate: endOfWeek(new Date()),
            endDate: addDays(endOfWeek(new Date()), 1),
        }),
        isSelected: () => false,
    },
    {
        label: "Next 3 Days",
        range: () => ({
            startDate: addDays(new Date(), 1),
            endDate: addDays(new Date(), 3),
        }),
        isSelected: () => false,
    },
    {
        label: "Next 5 Days",
        range: () => ({
            startDate: addDays(new Date(), 1),
            endDate: addDays(new Date(), 5),
        }),
        isSelected: () => false,
    },
    {
        label: "Next Week",
        range: () => ({
            startDate: addDays(startOfWeek(new Date()), 8),
            endDate: addDays(endOfWeek(new Date()), 8),
        }),
        isSelected: () => false,
    },
];

export const inputRange: InputRange[] = [
    {
        label: "days starting today",
        range(value) {
            const today = new Date();
            return {
                startDate: today,
                endDate: addDays(today, Math.max(Number(value), 1) - 1),
            };
        },
        getCurrentValue(range) {
            if (!isSameDay(range.startDate!, startOfDay(new Date())))
                return "-";
            if (!range.endDate) return "∞";
            return (
                differenceInCalendarDays(
                    range.endDate,
                    startOfDay(new Date())
                ) + 1
            );
        },
    },
];
