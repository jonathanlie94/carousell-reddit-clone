import { INCREMENT_PAGE, DECREMENT_PAGE } from './constants';

export function incrementPage() {
  return {
    type: INCREMENT_PAGE,
  };
}

export function decrementPage() {
  return {
    type: DECREMENT_PAGE,
  };
}
