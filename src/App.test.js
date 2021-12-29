import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Thanks for coming', () => {
  render(<App />);
  const linkElement = screen.getByText(/Thanks for coming/i);
  expect(linkElement).toBeInTheDocument();
});

