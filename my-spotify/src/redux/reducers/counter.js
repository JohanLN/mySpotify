import { counterConstants } from "../constants/counterConstants"

const counterReducers = (state = 0, action) => {
    switch (action.type) {
        case counterConstants.INCREMENT:
            return state + action.playload;
        case counterConstants.DECREMENT:
            return state - action.playload;
        default:
            return state;
    };
};

export default counterReducers;