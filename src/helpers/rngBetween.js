// GETS A NUMBER BETWEEN 2 NUMBERS
export const rngBetween = (numbers) => {
    const [min, max] = numbers;

    return Math.floor(Math.random() * (max + 1 - min) + min);
};
