import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Play from "./Components/Play";
import Questions from "./Components/Questions";
import Header from "./Components/Header";
import { createStore } from "redux";
import rootReducer from "./Reducers";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

function Quiz() {
  return (
    <div style={{ paddingBottom: "60px" }}>
      <Router>
        <Header></Header>
        <div
          style={{
            paddingTop: "2em",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Switch>
            <Route exact path="/" render={() => <Play />} />
            <Route exact path="/questions" render={() => <Questions />} />
          </Switch>
        </div>
        <footer>
          <button
            className="restartbtn"
            onClick={() =>
              persistor.purge().then(() => window.location.reload())
            }
          >
            Reset
          </button>
        </footer>
      </Router>
    </div>
  );
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<h1>LOADING</h1>} persistor={persistor}>
      <React.StrictMode>
        <Quiz />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
