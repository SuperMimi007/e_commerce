import { render, screen } from '@testing-library/react';
import App from './App';
import MyCart from './MyCart';



test('LinkToAdd', () => {
  render(<App/>)
  const linkElement =screen.getByText(/Add/i);
 expect(linkElement).toBeInTheDocument ()
});

test('LinkToDelete', () => {
  render(<App/>)
  const linkElement =screen.getByText(/Delete/i);
 expect(linkElement).toBeInTheDocument ()
});

test('TitreMyCart', () => {
  render(<App/>)
  const linkElement =screen.getByText(/My Cart/i);
 expect(linkElement).toBeInTheDocument ()
});
