import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from '../../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('shows a main window', () => {
  const div = document.create('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
})


/*
  IT:
  -shows a header
  -shows a footer
  -shows a sidebar
  -shows a main window
  -shows a chat window
*/