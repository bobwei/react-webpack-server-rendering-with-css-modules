/* eslint-disable react/jsx-filename-extension, import/extensions */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import App from '../src/components/App/index.jsx';

console.log(renderToStaticMarkup(<App />));
