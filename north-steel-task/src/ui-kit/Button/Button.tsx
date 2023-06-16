import React from "react";
import styles from "./Button.module.css";

interface IComponentProps {
  label: string;
  onClick(): void;
}

const Button: React.FC<IComponentProps> = ({ onClick, label }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {label}
    </div>
  );
};

export default React.memo(Button);
