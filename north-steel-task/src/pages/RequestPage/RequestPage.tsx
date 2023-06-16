import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import requests from "../../api/requests/requests";
import {
  LocalStorageKeysEnum,
  PublicRoutesEnum,
  RequestTypes,
} from "../../utils/enums";
import styles from "./RequestPage.module.css";
import Button from "../../ui-kit/Button/Button";

interface HistoryListModel {
  time: string;
  requestUrl: string;
  status: string;
}

const RequestPage: React.FC = () => {
  //hooks
  const params = useParams();
  const navigate = useNavigate();
  //state
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [reqHistory, setReqHistory] = useState<Array<HistoryListModel>>(
    JSON.parse(localStorage.getItem(LocalStorageKeysEnum.HISTORY) as string) ||
      []
  );
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
    localStorage.setItem(
      LocalStorageKeysEnum.HISTORY,
      JSON.stringify(reqHistory)
    );
  }, [reqHistory]);

  return (
    <>
      <h5 className={styles.backBtn} onClick={backToGeneral}>
        На главную{" "}
      </h5>
      <section className={styles.container}>
        <h1>Страница метода {params.type}</h1>
        {isLoading ? (
          <div>Загрузка...</div>
        ) : (
          <Button label={"Отправить"} onClick={sendRequest} />
        )}
        <Button label={changeVisibleBtnName()} onClick={changeVisible} />
        {isVisible && (
          <div className={styles.rows}>
            <div className={styles.row}>
              <div>Время</div>
              <div>Адрес</div>
              <div>Статус</div>
            </div>
            {reqHistory.length === 0 && <div>Список пуст</div>}
            {reqHistory.length > 0 &&
              reqHistory.map((item, index) => (
                <div className={styles.row} key={`${index}_${item.time}`}>
                  <div>{item.time}</div>
                  <div>{item.requestUrl}</div>
                  <div>{item.status}</div>
                </div>
              ))}
          </div>
        )}
        <Button label={"Очистить историю"} onClick={clearHistory} />
      </section>
    </>
  );
};

export default React.memo(RequestPage);
