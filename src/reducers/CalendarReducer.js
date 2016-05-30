/**
 * Created by Saul on 5/27/16.
 */
import {CALENDAR_GET} from '../actions/CalendarAction';

export default function (state = {}, action) {
  switch (action.type) {
    case CALENDAR_GET:
          return action.events;
    default:
          return state;
  }
}
