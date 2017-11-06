import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import ResponsiveProvider from 'hsl-shared-components/lib/Utils/ResponsiveProvider';
import Theme from 'hsl-shared-components/lib/Theme';
import TestRenderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
		<ResponsiveProvider>
			<ThemeProvider theme={Theme}>
				<App />
			</ThemeProvider>
		</ResponsiveProvider>
	), div);
  const json = TestRenderer.create(
  	<span>abc</span>
  ).toJSON();
  expect(json).toMatchSnapshot();
});
