/**
 * Created by Saul on 5/26/16.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CalendarPage from './components/calendar/CalendarPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CalendarPage} />
  </Route>
);
