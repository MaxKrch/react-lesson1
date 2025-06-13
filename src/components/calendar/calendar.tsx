import { memo, useMemo } from 'react'
import { type CalendarProps } from './calendar.type'

import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import createCalendarDates from '../../utils/create-calendar-dates'
import CalendarWeek from './components/calendar-week'

function Calendar({ date }: CalendarProps) {
  const targetDate = dayjs(date).locale(`ru`)
  const month = targetDate.format(`MMMM`)
  const [dayWeek, dateMonth, genetiveMonth, year] = targetDate
    .format(`dddd D MMMM YYYY`)
    .split(' ')
  const monthWithUpperedFirstLetter =
    month[0].toUpperCase() + month.slice(1, month.length)
  const calendarDates = useMemo(() => createCalendarDates(date), [date])

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {dayWeek.toUpperCase()}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{dateMonth}</div>
          <div className="ui-datepicker-material-month">{genetiveMonth}</div>
          <div className="ui-datepicker-material-year">{year}</div>
        </div>
      </div>

      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {monthWithUpperedFirstLetter}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">
              Пн
            </th>
            <th scope="col" title="Вторник">
              Вт
            </th>
            <th scope="col" title="Среда">
              Ср
            </th>
            <th scope="col" title="Четверг">
              Чт
            </th>
            <th scope="col" title="Пятница">
              Пт
            </th>
            <th scope="col" title="Суббота">
              Сб
            </th>
            <th scope="col" title="Воскресенье">
              Вс
            </th>
          </tr>
        </thead>
        <tbody>
          {calendarDates.map((week) => (
            <CalendarWeek
              key={`${week[0].get(`date`)}${week[6].get(`date`)}`}
              week={week}
              targetDate={targetDate}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Calendar)
