/**
 * Created by Saul on 5/27/16.
 */
let events = require('./events.js');

class CalendarApi {
  static getAllEvents() {
    return new Promise((resolve) => {
        resolve(events);
    });
  }
}

export default CalendarApi;
