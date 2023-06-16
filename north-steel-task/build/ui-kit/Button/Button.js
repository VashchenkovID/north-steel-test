import React from "react";
import styles from "./Button.module.css";
const Button = ({ onClick, label }) => {
    return (React.createElement("div", { className: styles.button, onClick: onClick }, label));
};
export default React.memo(Button);
//# sourceMappingURL=Button.js.map