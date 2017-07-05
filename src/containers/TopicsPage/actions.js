import { SELECT_TOPIC } from './constants';

export function selectTopic(id) {
  return {
    type: SELECT_TOPIC,
    id,
  };
}
