import { useState, useEffect } from "preact/hooks";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import cn from "classnames";

import createContainer from "../createContainer";
import styles from "./Notification.module.css";

const container = createContainer();

let timeToClose = 200 * 10;

export default function Notification({
  color = Color.info,
  autoClose = false,
  children,
}) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (autoClose) {
      const timeoutId = setTimeout(() => setIsClosing(true), timeToClose);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [autoClose]);

  return createPortal(
    <div className={cn([styles.container, { [styles.shrink]: isClosing }])}>
      <div
      style={{height: "30px"}}
        className={cn([
          styles.notification,
          styles[color],
          { [styles.slideIn]: !isClosing },
          { [styles.slideOut]: isClosing },
        ])}
      >
        {children}
        <button
          onClick={() => setIsClosing(true)}
          className={styles.closeButton}
        ></button>
      </div>
    </div>,
    container
  );
}

export const Color = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

Notification.propTypes = {
  notificationType: PropTypes.oneOf(Object.keys(Color)),
  autoClose: PropTypes.bool,
};
