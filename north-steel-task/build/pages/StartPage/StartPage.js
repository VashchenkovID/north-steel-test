import React, { useCallback } from "react";
import { PublicRoutesEnum, RequestTypes } from "../../utils/enums";
import { useNavigate } from "react-router-dom";
import styles from "./StartPage.module.css";
import Button from "../../ui-kit/Button/Button";
const StartPage = () => {
    //  hooks
    const navigate = useNavigate();
    //funcTools
    const onChange = useCallback((key) => {
        navigate(`${PublicRoutesEnum.REQUEST}/${key}`);
    }, []);
    return (React.createElement("section", { className: styles.container },
        React.createElement("h1", null, "\u0422\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435 \"\u0421\u0435\u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\""),
        React.createElement("div", null, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"),
        React.createElement("div", { className: styles.actions },
            React.createElement(Button, { onClick: () => onChange(RequestTypes.GET), label: "GET" }),
            React.createElement(Button, { onClick: () => onChange(RequestTypes.POST), label: "POST" }),
            React.createElement(Button, { onClick: () => onChange(RequestTypes.DELETE), label: "DELETE" }))));
};
export default React.memo(StartPage);
//# sourceMappingURL=StartPage.js.map