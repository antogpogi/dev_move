import { SET_SESSION } from './../actions/_types';

const initialState = {
    session: {
        user: {}
    }
}

const ApplicationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SESSION:
            return {
                ...state,
                session: action.payload
            }
        default:
            return state;
    }
}

export default ApplicationReducer;