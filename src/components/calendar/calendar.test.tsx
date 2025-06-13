import { render, screen } from '@testing-library/react'
import Calendar from './calendar'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import { vi } from 'vitest'
import type { CalendarWeekProps } from './calendar.type'

const countWeek = 5

vi.mock('./components/calendar-week', () => ({
  default: ({}: CalendarWeekProps) => (
    <tr data-testid="calendar-week">
      <td>{`day of week`}</td>
    </tr>
  ),
}))

vi.mock('../../utils/create-calendar-dates', () => ({
  default: (date: string) => {
    const base = require('dayjs')(date)
    return new Array(5).fill('').map((_, indexWeek) => {
      return new Array(7).fill('').map((_, indexDate) => {
        const shiftDay = indexWeek * 7 + indexDate
        return base.add(shiftDay, 'day')
      })
    })
  },
}))

describe('Component: Calendar', () => {
  const testDate = new Date('2025-06-10')
  const expectedDayWeek = /вторник/i
  const firstExpectedMonth = /ИЮНЬ/i
  const secondExpectedMonth = /июня/i

  it('should render weekday name, day, month and year in header', () => {
    render(<Calendar date={testDate} />)

    expect(screen.getByText(expectedDayWeek)).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText(firstExpectedMonth)).toBeInTheDocument()
    expect(screen.getByText(secondExpectedMonth)).toBeInTheDocument()
    expect(screen.getAllByText('2025')).toHaveLength(2)
  })

  it('should render month with capitalized first letter in header', () => {
    render(<Calendar date={testDate} />)

    expect(screen.getByText('Июнь')).toBeInTheDocument()
  })

  it('should render a table with 5 (const countWeek) CalendarWeek rows', () => {
    render(<Calendar date={testDate} />)

    const weekRows = screen.getAllByTestId('calendar-week')
    expect(weekRows).toHaveLength(countWeek)
  })

  it('should render weekday headers in correct order', () => {
    render(<Calendar date={testDate} />)

    expect(screen.getByText('Пн')).toBeInTheDocument()
    expect(screen.getByText('Вт')).toBeInTheDocument()
    expect(screen.getByText('Ср')).toBeInTheDocument()
    expect(screen.getByText('Чт')).toBeInTheDocument()
    expect(screen.getByText('Пт')).toBeInTheDocument()
    expect(screen.getByText('Сб')).toBeInTheDocument()
    expect(screen.getByText('Вс')).toBeInTheDocument()
  })
})
