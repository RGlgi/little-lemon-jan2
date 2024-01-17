import { validateBookingForm } from './BookingForm'

describe('validateBookingForm', () => {
  it('error message', () => {
    const formData = {
      date: '',
      time: '',
      diners: '',
    }
    const isValid = validateBookingForm(formData)
    expect(isValid).toBe(false)
  })
  it('if input values are valid', () => {
    const formData = {
      date: '10/27/2024',
      time: '21:00',
      diners: '2',
    }
    const isValid = validateBookingForm(formData)
    expect(isValid).toBe(true)
  })
})
