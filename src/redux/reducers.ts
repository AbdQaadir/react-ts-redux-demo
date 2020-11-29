import { REMOVE_ITEM, ADD_ITEM } from './actions';

//TypeScript Props for action arg
interface ActionProps {
    type: string, 
    payload: any
}

//TypeScript Props for action item
interface ItemProps {
    id: string, 
    text: string
}
// Declare the intial state and assign the type of array to it
const initialState: [] = [];

// Declare and export the todoReducer which takes in the initial state and the action
export const todoReducer = (state = initialState, action: ActionProps) => {
    const clonedState = [...state];
    switch(action.type){
        case ADD_ITEM:
            return [...clonedState, {id: action.payload.id, text: action.payload.text}]
        case REMOVE_ITEM:
            return clonedState.filter((item:ItemProps) => item.id !== action.payload);
        default:
            return state;
    }
}