import { counterConstants } from '../constants/counterConstants';

export const increment = (number) => {
    return {
        type: counterConstants.INCREMENT,
        playload: number
    };
};

export const decrement = (number) => {
    return {
        type: counterConstants.DECREMENT,
        playload: number
    };
};