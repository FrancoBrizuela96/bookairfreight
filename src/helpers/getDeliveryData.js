import addDaysToDate from "./addDaysToDate";
import { rngBetween } from "./rngBetween";

export const getDeliveryData = ({
    shipping_channel,
    starting_country,
    destination_country,
    quota_price,
}) => {
    let initial_number, final_number, initial_date, final_date;
    const current_date = new Date();

    if (shipping_channel === "air") {
        initial_number = rngBetween([3, 7]);

        final_number = initial_number + rngBetween([2, 4]);

        initial_date = addDaysToDate(current_date, initial_number);

        final_date = addDaysToDate(current_date, final_number);
    } else if (shipping_channel === "ocean") {
        initial_number = rngBetween([25, 30]);

        final_number = initial_number + rngBetween([5, 10]);

        initial_date = addDaysToDate(current_date, initial_number);

        final_date = addDaysToDate(current_date, final_number);
    }

    return {
        starting_country: starting_country,
        destination_country: destination_country,
        quota_price: quota_price,
        shipping_channel: shipping_channel,
        initial_day: initial_number,
        final_day: final_number,
        initial_date: initial_date,
        final_date: final_date,
    };
};
