import CalendarDate from './calendar-date'
import { memo } from 'react'
import type { CalendarWeekProps } from '../calendar.type'

function CalendarWeek({ week, targetDate }: CalendarWeekProps) {
  return (
    <tr>
      {week.map((currentDate) => (
        <CalendarDate
          key={`${currentDate.get(`date`)}${currentDate.get(`month`)}`}
          currentDate={currentDate}
          targetDate={targetDate}
        />
      ))}
    </tr>
  )
}

export default memo(CalendarWeek)
