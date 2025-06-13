import { describe, it, expect } from 'vitest'
import createCalendarDates from './create-calendar-dates'
import dayjs from 'dayjs'

describe('createCalendarDates', () => {
  it('should return 5 or 6 weeks depending on the month layout', () => {
    const result = createCalendarDates(new Date('2024-06-01'))
    expect(result.length === 5 || result.length === 6).toBe(true)
  })

  it('each week should contain exactly 7 days', () => {
    const result = createCalendarDates(new Date('2024-06-01'))
    result.forEach((week) => {
      expect(week.length).toBe(7)
    })
  })

  it('the first day of the first week should be Monday', () => {
    const result = createCalendarDates(new Date('2024-06-01'))
    const firstDay = result[0][0]
    expect(firstDay.day()).toBe(1)
  })

  it('calendar should contain all days of the target month', () => {
    const target = dayjs('2024-06-01')
    const result = createCalendarDates(target.toDate())

    const allDays = result.flat()
    const daysInTargetMonth = allDays.filter(
      (d) => d.month() === target.month()
    )

    expect(daysInTargetMonth[0].date()).toBe(1)
    expect(daysInTargetMonth.length).toBe(30)
    expect(daysInTargetMonth[daysInTargetMonth.length - 1]?.date()).toBe(30)
  })

  it('should not contain extra days from next month when month ends on Sunday', () => {
    const result = createCalendarDates(new Date('2023-12-01'))
    const allDays = result.flat()
    const lastDay = allDays[allDays.length - 1]!

    expect(lastDay.month()).toBe(11) //
    expect(lastDay.date()).toBe(31)
    expect(lastDay.day()).toBe(0) //
  })

  it('should include days from previous month at start if the 1st is not Monday', () => {
    const result = createCalendarDates(new Date('2024-06-01'))
    const firstDay = result[0][0]

    expect(firstDay.isBefore(dayjs('2024-06-01'))).toBe(true)
  })
})
