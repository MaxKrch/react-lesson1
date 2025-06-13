import { render, screen } from '@testing-library/react'
import dayjs from 'dayjs'
import CalendarDate from './calendar-date'

describe(`Component: CalendarDate`, () => {
  const baseDate = dayjs('2025-06-10')

  it(`should render the correct date of month`, () => {
    render(
      <table>
        <tbody>
          <tr>
            <CalendarDate currentDate={baseDate} targetDate={baseDate} />
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByText(10)).toBeInTheDocument()
  })

  it(`should add "ui-datepicker-today" class when current date equals target date`, () => {
    render(
      <table>
        <tbody>
          <tr>
            <CalendarDate currentDate={baseDate} targetDate={baseDate} />
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByText(10)).toHaveClass('ui-datepicker-today')
  })

  it(`should not add "ui-datepicker-today" class when dates are different`, () => {
    render(
      <table>
        <tbody>
          <tr>
            <CalendarDate
              currentDate={baseDate}
              targetDate={baseDate.add(1, 'day')}
            />
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByText(10)).not.toHaveClass('ui-datepicker-today')
  })

  it(`should add "ui-datepicker-other-month" class when current month is different`, () => {
    render(
      <table>
        <tbody>
          <tr>
            <CalendarDate
              currentDate={baseDate.subtract(1, 'month')}
              targetDate={baseDate}
            />
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByText(10)).toHaveClass('ui-datepicker-other-month')
  })

  it(`should not add "ui-datepicker-other-month" class when months are the same`, () => {
    render(
      <table>
        <tbody>
          <tr>
            <CalendarDate currentDate={baseDate} targetDate={baseDate} />
          </tr>
        </tbody>
      </table>
    )

    expect(screen.getByText(10)).not.toHaveClass('ui-datepicker-other-month')
  })
})
