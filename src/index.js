import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components';
import { ResponsiveProvider, Theme } from 'hsl-shared-components';

ReactDOM.render(
	(
		<ResponsiveProvider>
			<ThemeProvider theme={Theme}>
				<App />
			</ThemeProvider>
		</ResponsiveProvider>
	),
	document.getElementById('root'));
registerServiceWorker();
