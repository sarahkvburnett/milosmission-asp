import React from 'react';
import { Route } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Animals from './pages/Animals';

import './styles/app.css'

export default function App() {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/animals' component={Animals} />
      </Layout>
    );
}
