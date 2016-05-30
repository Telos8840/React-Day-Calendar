/**
 * Created by Saul on 5/27/16.
 */
import React from 'react';
import { Callout, Colors } from 'react-foundation';
import Event from './Event';


class Panel extends React.Component {
  render() {

    let sortedEvents = sortAndCheckOverlap(this.props.events);
    let eventsComponent = [];

    if (sortedEvents) {
      eventsComponent = eventsComponent.concat(sortedEvents.map((_event, key) => {
        _event.startTime = _event.startTime.toString();
        _event.endTime = _event.endTime.toString();
        const _component = (
          <Event key={key} event={_event} overlap={sortedEvents.length} position={_event.position} />
        );
        return _component;
      }));
    }


    return (

      <Callout color={Colors.SECONDARY} className="calendar-content">

          <div className="calendar-flex">
            {
              eventsComponent
            }
          </div>
      </Callout>
    );
  }
}

function sortAndCheckOverlap(events) {
  events = updateTime(events);

  if (events) {
    events.sort((a, b) => {
      return a.startTime - b.startTime;
    });
  }

   return checkOverlap(events);
}

function checkOverlap(events) {
  if (!events) return;

  let size = events.length;

  for (let i = 0; i < size; i++) {
    let curEvent = events[i];
    for (let j = i + 1; j < size; j++) {
      let nextEvent = events[j];
      if (curEvent.startTime < nextEvent.endTime && curEvent.endTime > nextEvent.startTime) {
        nextEvent.position++;
      }
    }
  }
  
  return events;
}

function updateTime(events) {
  if (!events) return;
  events.forEach(event => {
    event.startTime = new Date('2016/01/01 ' + event.startTime);
    event.endTime = new Date('2016/01/01 ' + event.endTime);
    event.position = 0;
  });

  return events;
}

Panel.propTypes = {
  events: React.PropTypes.array.isRequired
};

export default Panel;
