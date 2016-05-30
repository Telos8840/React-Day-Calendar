/**
 * Created by Saul on 5/27/16.
 */
import React from 'react';
import { Callout } from 'react-foundation';

const Event = (props) => {
  let endTime =  new Date(props.event.endTime).getHours();
  let startTime =  new Date(props.event.startTime).getHours();
  let startMin = new Date(props.event.startTime).getMinutes();
  let step = startMin > 0 ? 5 : 4;
  let height = (endTime - startTime) * 100;
  let minHour = 9, totalSlots = 22, gridHeight = 1080;
  let time = Math.abs(minHour - startTime) === 0 ? 1 : (Math.abs(minHour - startTime) * step);
  let top = ((time * totalSlots) / gridHeight) * 100;

  const _style = {
    width: `calc(${100 / props.overlap}% - 4px)`,
    left: `${(100 / props.overlap) * props.position}%`,
    top: `${top}%`,
    height: height
  };

  return (
    <Callout style={_style} className="calendar-event event-border">
      <h5 className="event-text">{props.event.title}</h5>
      <p>{props.event.address}</p>
    </Callout>
  );
};

Event.propTypes = {
  event: React.PropTypes.object.isRequired,
  overlap: React.PropTypes.number.isRequired,
  position: React.PropTypes.number.isRequired
};

export default Event;
