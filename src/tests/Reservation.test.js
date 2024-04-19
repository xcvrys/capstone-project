import { render, fireEvent, screen } from "@testing-library/react";
import Reservation from '../pages/Reservation';
import GlobalProvider from '../providers/GlobalProvider'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const TestWrap = () => {
  return (
    <BrowserRouter initalEntries={[{ pathname: '/reservations' }]}>
      <GlobalProvider>
        <Reservation />
      </GlobalProvider>
    </BrowserRouter>
  )
}



const time = 10000

beforeAll(() => jest.setTimeout(time))

test('Renders the BookingForm heading', () => {
  render(<TestWrap />);
  const headingElement = screen.getByText("Table Reservation");
  expect(headingElement).toBeInTheDocument();
})

test('shows selected time slot when selected', async () => {
  render(<TestWrap />)
  const button = await screen.findByTestId('7:30 PM')
  expect(button).toBeInTheDocument()
  fireEvent.click(button)
  expect(screen.getByDisplayValue('7:30 PM')).toBeInTheDocument()
})

test('displays notice to enter time slot when absent', async () => {
  render(<TestWrap />)
  const confirm = screen.getByText('CONTINUE')
  fireEvent.click(confirm)
  const expected = await screen.findByText('Please enter a time for your reservation.')
  expect(expected).toBeInTheDocument()
})

test('first name field is required', async () => {
  render(<TestWrap />)
  const field = await screen.findByTestId('firstName')
  expect(field).toHaveAttribute('required')
})

test('last name field is required', async () => {
  render(<TestWrap />)
  const field = await screen.findByTestId('lastName')
  expect(field).toHaveAttribute('required')
})

test('email field is required', async () => {
  render(<TestWrap />)
  const field = await screen.findByTestId('email')
  expect(field).toHaveAttribute('required')
})

test('time slot field is required', async () => {
  render(<TestWrap />)
  const field = await screen.findByTestId('timeslot')
  expect(field).toHaveAttribute('required')
})
