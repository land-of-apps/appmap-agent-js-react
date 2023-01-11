import { cleanup, fireEvent, render } from '@testing-library/react';
import App from '../src/App';
afterEach(cleanup);
it('App contains title', () => {
  const {queryByText} = render(<App />);
  expect(queryByText(/Counter/u)).toBeTruthy();
});
