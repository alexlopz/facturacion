import { format, parseISO } from "date-fns";

export const formatDateTime = (inputDate: string) => {
    const dateObj = parseISO(inputDate);
    return format(dateObj, 'dd/MM/yyyy HH:mm');
}