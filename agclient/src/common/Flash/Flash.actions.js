import {
  ADD_FLASH_MESSAGE,
  DELETE_FLASH_MESSAGE,
  CLEAN_FLASH_MESSAGES
} from './Flash.actionTypes';

export function addFlashMessage(message, category) {
  return {
    type: ADD_FLASH_MESSAGE,
    message,
    category
  };
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  };
}

export function cleanFlashMessages() {
  return {
    type: CLEAN_FLASH_MESSAGES
  };
}
