/**
 * Created by Saul on 5/26/16.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Panel from './Panel';
import Times from './Times';
import { Row, Column } from 'react-foundation';
import * as CalendarActions from '../../actions/CalendarAction';

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let timeArray = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM'];

    return (
      <Row className="align-top">
          <Column large={1}>
            <div className="time-gutter">
            {
              timeArray.map((time) => {
                return (
                  <Times key={time} time={time}/>
                );
              })
            }
            </div>
          </Column>

          <Column large={11}>
            <div className="calendar-view">
              <Panel events={this.props.events}/>
            </div>
          </Column>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.calendar.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CalendarActions, dispatch)
  };
}

CalendarPage.propTypes = {
  events: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
