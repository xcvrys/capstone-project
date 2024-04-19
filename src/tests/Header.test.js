import { render, screen, cleanup } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'

const TestWrap = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

afterEach(cleanup)

test('renders company logo', () => {
  render(
    <TestWrap />
  );
  const element = screen.getByTestId(/logo/i);
  expect(element).toBeInTheDocument();
});

test('renders HOME link', () => {
  render(
    <TestWrap />
  );
  const element = screen.getByTestId(/home/i);
  expect(element).toHaveTextContent('Home');
});

test('renders ABOUT link', () => {
  render(
    <TestWrap />
  );
  const element = screen.getByTestId(/about/i);
  expect(element).toHaveTextContent('About');
});

test('renders MENU link', () => {
  render(
    <TestWrap />
  );
  const element = screen.getByTestId(/menu/i);
  expect(element).toHaveTextContent('Menu');
});

test('renders Reservation link', () => {
  render(
    <TestWrap />
  );
  const element = screen.getByTestId(/reservation/i);
  expect(element).toHaveTextContent('Reservation');
});

test('renders ORDER link', () => {
  render(
    <TestWrap />
  );
  const element = screen.getByTestId(/order/i);
  expect(element).toHaveTextContent('Order');
});

test('renders LOGIN link', () => {
  render(
    <TestWrap />
  );
  const element = screen.getByTestId(/login/i);
  expect(element).toHaveTextContent('Login');
});