import { render, screen } from '@testing-library/react'
import CalendarWeek from './calendar-week'
import dayjs, { type Dayjs } from 'dayjs'
import { vi } from 'vitest'

vi.mock('./calendar-date', () => {
  type CalendarDateMockProps = {
    currentDate: Dayjs
    targetDate: Dayjs
  }

  return {
    default: ({ currentDate }: CalendarDateMockProps) => (
      <td data-testid="calendar-date">{currentDate.format('DD-MM')}</td>
    ),
  }
})

describe('Component: CalendarWeek', () => {
  const mockTargetDate = dayjs('2025-06-13')
  const mockWeek = Array.from({ length: 7 }, (_, i) =>
    dayjs('2025-06-09').add(i, 'day')
  )

  it('should render one table row', () => {
    render(
      <table>
        <tbody>
          <CalendarWeek week={mockWeek} targetDate={mockTargetDate} />
        </tbody>
      </table>
    )

    const rows = screen.getAllByRole(`row`)
    expect(rows.length).toBe(1)
  })

  it('should render 7 CalendarDate cells', () => {
    render(
      <table>
        <tbody>
          <CalendarWeek week={mockWeek} targetDate={mockTargetDate} />
        </tbody>
      </table>
    )

    const cells = screen.getAllByTestId('calendar-date')
    expect(cells).toHaveLength(7)
  })

  it('should render CalendarDate cells with correct text content (DD-MM)', () => {
    render(
      <table>
        <tbody>
          <CalendarWeek week={mockWeek} targetDate={mockTargetDate} />
        </tbody>
      </table>
    )

    mockWeek.forEach((date) => {
      expect(screen.getByText(date.format('DD-MM'))).toBeInTheDocument()
    })
  })
})
