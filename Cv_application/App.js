import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Form from './Form';

const App = () => {
    return(<><Header />
    <Form /></>)
}

render(<App />, document.getElementById("root"));