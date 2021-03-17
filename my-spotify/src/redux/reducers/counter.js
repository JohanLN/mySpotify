const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.playload;
        case "DECREMENT":
            return state - action.playload;
        default:
            return state;
    };
};

export default counterReducer;