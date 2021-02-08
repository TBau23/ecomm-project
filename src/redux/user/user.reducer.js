// reducer is just a function that takes in action and the current state
// action is just an object with a type and a payload 

const INITIAL_STATE = {
    currentUser: null,
}
// in the same way that you need to set defaults for state in a class component, you need to do the same for reducers
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER': 
            return {
                ...state,
                currentUser: action.payload
            }
        
        default:
            return state // if none of the action types match, just return state
    }
};

export default userReducer