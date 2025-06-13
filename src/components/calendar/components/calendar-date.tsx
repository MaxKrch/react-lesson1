import { memo } from 'react'
import cn from 'classnames'
import type { CalendarDateProps } from '../calendar.type'

function CalendarDate({ currentDate, targetDate }: CalendarDateProps) {
  return (
    <td
      className={cn({
        'ui-datepicker-other-month':
          currentDate.get(`month`) !== targetDate.get(`month`),
        'ui-datepicker-today': currentDate.isSame(targetDate, 'day'),
      })}
    >
      {currentDate.format(`DD`)}
    </td>
  )
}

export default memo(CalendarDate)
