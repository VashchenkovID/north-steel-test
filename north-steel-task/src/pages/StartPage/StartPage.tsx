import React, { useCallback } from "react";
import { PublicRoutesEnum, RequestTypes } from "../../utils/enums";
import { useNavigate } from "react-router-dom";
import styles from "./StartPage.module.css";
import Button from "../../ui-kit/Button/Button";

const StartPage: React.FC = () => {
  //  hooks
  const navigate = useNavigate();
  //funcTools
  const onChange = useCallback((key: RequestTypes) => {
    navigate(`${PublicRoutesEnum.REQUEST}/${key}`);
  }, []);
  return (
    <section className={styles.container}>
      <h1>Тестовое задание "Северсталь"</h1>
      <div>Выберите страницу</div>
      <div className={styles.actions}>
        <Button onClick={() => onChange(RequestTypes.GET)} label={"GET"} />
        <Button onClick={() => onChange(RequestTypes.POST)} label={"POST"} />
        <Button
          onClick={() => onChange(RequestTypes.DELETE)}
          label={"DELETE"}
        />
      </div>
    </section>
  );
};

export default React.memo(StartPage);
