/**
 * Created by Saul on 5/27/16.
 */
import React from 'react';

const Times = (props) => {
  let time = props.time.split(' ');

  return (
    <div>
      <div className="time-slot text-right">
        <h4>{time[0] + ':00'} <small>{time[1]}</small></h4>
      </div>
      <div className="time-slot text-right">
            <h5 className="subheader">
              {
                checkTime(props.time)
              }
            </h5>
      </div>
    </div>
  );
};

function checkTime(time) {
  if (time !== '9 PM') {
    return parseInt(time) + ':30';
  }
}

Times.propTypes = {
  time: React.PropTypes.string.isRequired
};

export default Times;
