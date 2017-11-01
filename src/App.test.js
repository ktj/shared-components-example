import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { ResponsiveProvider, Theme } from 'hsl-shared-components';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
		<ResponsiveProvider>
			<ThemeProvider theme={Theme}>
				<App />
			</ThemeProvider>
		</ResponsiveProvider>
	), div);
});
