import {ADD_ITEM,REMOVE_ITEM} from './actions';

export const ADD_ITEM_TO_TODO = (id:string, text: string) => ({type:ADD_ITEM, payload: {id, text} });

export const REMOVE_ITEM_TO_TODO = (id: string) => ({type: REMOVE_ITEM, payload: id});


