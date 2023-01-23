import React from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  watchlist: [],
  watched: [],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
