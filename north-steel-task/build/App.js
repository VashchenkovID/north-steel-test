import "./App.css";
import React from 'react';
import AppRouter from "./components/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";
function Contexts(props) {
    return React.createElement(BrowserRouter, null, props.children);
}
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Contexts, null,
            React.createElement(AppRouter, null))));
};
export default App;
//# sourceMappingURL=App.js.map