import shortid from 'shortid';
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE, CLEAN_FLASH_MESSAGES } from '../actions/types';
import findIndex from 'lodash/findIndex';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_FLASH_MESSAGE:
            const messageExists = findIndex(state, { category: action.message.category });
            if(messageExists < 0) {
                return [
                    ...state,
                    {
                        id: shortid.generate(), // generate random ID so we can delete it easily later
                        type: action.message.type,
                        text: action.message.text,
                        category: action.message.category
                    }
                ] 
            }
            break;
        case DELETE_FLASH_MESSAGE:
            const index = findIndex(state, { id: action.id })            
            if(index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ]                
            }
            break;
        case CLEAN_FLASH_MESSAGES:
            return [];
        default: 
            return state;
    } 
    return state;   
}