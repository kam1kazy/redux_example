import ReactDom from "react-dom";
// подключаем стор
import store from "./store/store";
// компоненты
import App from "./components/App";
import ViewName from "./components/ViewName";
// хук - провайдер
import { Provider } from "react-redux";

ReactDom.render(
  <Provider store={store}>
    <App />
    <ViewName />
  </Provider>,
  document.getElementById("root")
);
