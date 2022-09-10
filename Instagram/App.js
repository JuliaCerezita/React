import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';

const App = () => {
    return (
        <div className="reactwrapper">
            <Header />
            <Page />
            <Footer />
        </div>
    )

}

render(<App />, document.getElementById("root"));