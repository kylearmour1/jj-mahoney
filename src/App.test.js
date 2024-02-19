// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/JJ Mahoneys/i);
//   expect(linkElement).toBeInTheDocument();
// });


import { render, screen } from '@testing-library/react';
import App from './App';
test('renders JJ Mahoney\'s heading', () => {
  render(<App />);
  // This line specifically targets an h1 heading with "JJ Mahoney's"
  const headingElement = screen.getByRole('heading', { name: /JJ Mahoney's/i, level: 1 });
  expect(headingElement).toBeInTheDocument();
});
