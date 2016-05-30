/**
 * Created by Saul on 5/27/16.
 */
import CalendarApi from '../api/mockCalendarApi';

export const CALENDAR_GET = 'CALENDAR_GET';
export function loadCalendarSuccess(events) {
  return {
    type: CALENDAR_GET,
    events
  };
}

export function loadCalendar() {
  return dispatch => {
    return CalendarApi.getAllEvents().then(events => {
      dispatch(loadCalendarSuccess(events));
    }).catch(error => {
      throw(error);
    });
  };
}
