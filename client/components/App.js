import React from "react";
import Header from './Header';

export const App = (props) => (
    <div className="container">
        <Header />
        {props.children}
    </div>
)