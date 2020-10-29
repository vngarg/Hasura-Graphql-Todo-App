import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
