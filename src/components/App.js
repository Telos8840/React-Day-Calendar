/**
 * Created by Saul on 5/26/16.
 */
import React from 'react';
import CalendarPage from './calendar/CalendarPage';

class App extends React.Component {
  render() {
    return (
      <section>
        <CalendarPage />
      </section>

    );
  }
}

App.propTypes = {

};

export default App;
