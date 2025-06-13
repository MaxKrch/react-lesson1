import dayjs, { Dayjs } from 'dayjs'

const createCalendarDates = (date: Date): Dayjs[][] => {
  const targetDate = dayjs(date).startOf('month')
  const month = targetDate.month()

  const startDate =
    targetDate.day() === 0
      ? targetDate.subtract(6, 'day')
      : targetDate.subtract(targetDate.day() - 1, 'day')

  const dates: Dayjs[] = []

  let complete = false
  let current = startDate

  while (!complete) {
    for (let i = 0; i < 7; i += 1) {
      dates.push(current)
      current = dayjs(current).add(1, 'day')

      if (dates.length >= 35 && current.get(`month`) !== month) {
        complete = true
      }
    }
  }

  const groupedDates: Dayjs[][] = dates.reduce((days, currentDay, index) => {
    if (index % 7 === 0) days.push([])
    days[days.length - 1].push(currentDay)

    return days
  }, [] as Dayjs[][])

  return groupedDates
}

export default createCalendarDates
