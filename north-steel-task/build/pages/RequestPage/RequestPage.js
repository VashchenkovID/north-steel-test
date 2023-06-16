import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import requests from "../../api/requests/requests";
import { LocalStorageKeysEnum, PublicRoutesEnum, RequestTypes, } from "../../utils/enums";
import styles from "./RequestPage.module.css";
import Button from "../../ui-kit/Button/Button";
const RequestPage = () => {
    //hooks
    const params = useParams();
    const navigate = useNavigate();
    //state
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [reqHistory, setReqHistory] = useState(JSON.parse(localStorage.getItem(LocalStorageKeysEnum.HISTORY)) ||
        []);
    //Request
    const sendRequest = useCallback(async () => {
        setIsLoading(true);
        switch (params.type) {
            case RequestTypes.GET:
                return await requests
                    .getReq()
                    .then((r) => {
                    setReqHistory((prevState) => {
                        return [
                            ...prevState,
                            {
                                time: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
                                requestUrl: r.data.url,
                                status: "fulfilled",
                            },
                        ];
                    });
                })
                    .catch(() => alert("Ошибка при запросе"))
                    .finally(() => setIsLoading(false));
            case RequestTypes.POST:
                return await requests
                    .postReq()
                    .then((r) => {
                    setReqHistory((prevState) => {
                        return [
                            ...prevState,
                            {
                                time: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
                                requestUrl: r.data.url,
                                status: "fulfilled",
                            },
                        ];
                    });
                })
                    .catch(() => alert("Ошибка при запросе"))
                    .finally(() => setIsLoading(false));
            case RequestTypes.DELETE:
                return requests
                    .deleteReq()
                    .then((r) => {
                    setReqHistory((prevState) => {
                        return [
                            ...prevState,
                            {
                                time: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
                                requestUrl: r.data.url,
                                status: "fulfilled",
                            },
                        ];
                    });
                })
                    .catch(() => alert("Ошибка при запросе"))
                    .finally(() => setIsLoading(false));
            default:
                alert("Нет такого метода");
        }
        setIsLoading(false);
    }, [params]);
    //funcTools
    const changeVisible = useCallback(() => {
        setIsVisible((prev) => !prev);
    }, []);
    const clearHistory = useCallback(() => {
        setReqHistory([]);
        localStorage.clear();
    }, []);
    const backToGeneral = () => {
        navigate(`${PublicRoutesEnum.GENERAL}`);
    };
    const changeVisibleBtnName = useCallback(() => {
        return isVisible ? "Скрыть историю запросов" : "Показать историю запросов";
    }, [isVisible]);
    //sideEffects
    useEffect(() => {
        localStorage.setItem(LocalStorageKeysEnum.HISTORY, JSON.stringify(reqHistory));
    }, [reqHistory]);
    return (React.createElement(React.Fragment, null,
        React.createElement("h5", { className: styles.backBtn, onClick: backToGeneral },
            "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
            " "),
        React.createElement("section", { className: styles.container },
            React.createElement("h1", null,
                "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043C\u0435\u0442\u043E\u0434\u0430 ",
                params.type),
            isLoading ? (React.createElement("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")) : (React.createElement(Button, { label: "Отправить", onClick: sendRequest })),
            React.createElement(Button, { label: changeVisibleBtnName(), onClick: changeVisible }),
            isVisible && (React.createElement("div", { className: styles.rows },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", null, "\u0412\u0440\u0435\u043C\u044F"),
                    React.createElement("div", null, "\u0410\u0434\u0440\u0435\u0441"),
                    React.createElement("div", null, "\u0421\u0442\u0430\u0442\u0443\u0441")),
                reqHistory.length === 0 && React.createElement("div", null, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0443\u0441\u0442"),
                reqHistory.length > 0 &&
                    reqHistory.map((item, index) => (React.createElement("div", { className: styles.row, key: `${index}_${item.time}` },
                        React.createElement("div", null, item.time),
                        React.createElement("div", null, item.requestUrl),
                        React.createElement("div", null, item.status)))))),
            React.createElement(Button, { label: "Очистить историю", onClick: clearHistory }))));
};
export default React.memo(RequestPage);
//# sourceMappingURL=RequestPage.js.map