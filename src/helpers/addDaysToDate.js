const addDaysToDate = (date, days) => {
    let new_date = new Date(date);

    new_date.setDate(new_date.getDate() + days);

    return new_date;
};

export default addDaysToDate;
