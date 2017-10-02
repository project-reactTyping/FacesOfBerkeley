import React from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import "./Calendar.css";

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

class Calendar extends React.Component {

	render() {
		return (
		  <InfiniteCalendar
		    width={250}
		    height={400}
		    selected={today}
		    minDate={lastWeek} />
		);
	}
}

export default Calendar;