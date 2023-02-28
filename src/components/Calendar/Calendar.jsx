import { useState } from "react";
import "./Calendar.css";

export default function Calendar({ className, year, month }) {
  const [appointments, setAppointments] = useState([
    {
      day: 1,
      month: 0,
      time: "9:00",
      title: "Meeting with John",
      description: "Discuss about the new project",
      backgroundColor: "red",
    },
    {
      day: 1,
      month: 0,
      time: "9:00",
      title: "Meeting with Jan",
      description: "Discuss about the new project",
      backgroundColor: "blue",
    },
  ]);
  function createCalendar() {
    const date = new Date(year, month);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = date.getDay();
    const rows = [];

    let dateCounter = 1;
    for (let i = 0; i < 6; i++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          cells.push(<td key={`blank-${j}`}></td>);
        } else if (dateCounter > daysInMonth) {
          break;
        } else {
          cells.push(
            <td className="calendar-cell-body" key={dateCounter}>
              <span className="date-counter">{dateCounter}</span>
              {appointments
                .filter((appt) => {
                  return appt.day === dateCounter && appt.month === month;
                })
                .map((appt) => {
                  console.log("This one is found");
                  return (
                    <span
                      className="appointment"
                      style={{ backgroundColor: appt.backgroundColor }}
                    >
                      {appt.title}
                    </span>
                  );
                })}
            </td>
          );
          dateCounter++;
        }
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
    return rows;
  }
  return (
    <div className="calendar-container">
      <h1 className="calendar-title">Calendar</h1>
      <table className="calendar-table">
        <thead>
          <tr>
            <th className="calendar-cell">Sunday</th>
            <th className="calendar-cell">Monday</th>
            <th className="calendar-cell">Tuesday</th>
            <th className="calendar-cell">Wednesday</th>
            <th className="calendar-cell">Thursday</th>
            <th className="calendar-cell">Friday</th>
            <th className="calendar-cell">Saturday</th>
          </tr>
        </thead>
        <tbody>{createCalendar()}</tbody>
      </table>
    </div>
  );
}
