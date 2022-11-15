// @ts-nocheck
import ReactDOM from "react-dom";

import NotificationsManager from "./NotificationsManager";
import Notification, { Color } from "./Notification";
import createContainer from "./createContainer";

const containerElement = createContainer();
let notify:any;

ReactDOM.render(
  <NotificationsManager
    setNotify={(notifyFn:any) => {
      notify = notifyFn;
    }}
  />,
  containerElement
);

export { Notification, Color };

export function info(children:any, autoClose:any) {
  return notify({
    color: Color.info,
    children,
    autoClose,
  });
}

export function success(children:any, autoClose:any) {
  return notify({
    color: Color.success,
    children,
    autoClose,
  });
}

export function warning(children:any, autoClose:any) {
  return notify({
    color: Color.warning,
    children,
    autoClose,
  });
}

export function error(children:any, autoClose:any) {
  return notify({
    color: Color.error,
    children,
    autoClose,
  });
}
