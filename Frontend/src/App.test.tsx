import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World', () => {
  render(<App />);
  const HelloWorldElement = screen.getByText("Hello World");
  expect(HelloWorldElement).toBeInTheDocument();
});
