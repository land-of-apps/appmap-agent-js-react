import { cleanup, fireEvent, render } from '@testing-library/react';
import { Counter } from '../src/Counter';
afterEach(cleanup);
it('Counter increments its label after click', () => {
  const {queryByText, getByText} = render(<Counter init={123} />);
  expect(queryByText(/123/u)).toBeTruthy();
  fireEvent.click(getByText(/123/u));
  expect(queryByText(/124/u)).toBeTruthy();
});
