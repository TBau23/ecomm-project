import { UserActionTypes } from './user.types';
// function that just takes in the user object 
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // has to match with what the reducer is expecting in the switch
    payload: user
})