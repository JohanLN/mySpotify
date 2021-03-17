export const increment = (number) => {
    return {
        type: "INCREMENT",
        playload: number
    };
};

export const decrement = (number) => {
    return {
        type: "DECREMENT",
        playload: number
    };
};