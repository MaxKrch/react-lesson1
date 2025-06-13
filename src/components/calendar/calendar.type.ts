import type { Dayjs } from 'dayjs'

type CalendarProps = {
  date: Date
}

type CalendarWeekProps = {
  week: Dayjs[]
  targetDate: Dayjs
}

type CalendarDateProps = {
  currentDate: Dayjs
  targetDate: Dayjs
}

export { type CalendarProps, type CalendarWeekProps, type CalendarDateProps }
