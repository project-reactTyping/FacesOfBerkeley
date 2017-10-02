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
<<<<<<< HEAD
		    width={250}
		    height={400}
=======
		    width={275}
		    height={350}
>>>>>>> 043f1b3fa6abd1e1a0a8c528a361b8d722a1cf7b
		    selected={today}
		    minDate={lastWeek} />
		);
	}
}

export default Calendar;