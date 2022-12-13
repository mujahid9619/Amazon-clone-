import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { auth } from "./firebase";
import Routing from "./Routes/Routing";
import { useStateValue } from "./StateProvider/StateProvider";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
