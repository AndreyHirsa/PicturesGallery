import React, { useState } from "react";
import { HeaderNavigation } from "./components/HeaderNavigation/HeaderNavigation";
import { PopupFade } from "./components/PopupFade/PopupFade";

const App: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [currentForm, setCurrentForm] = useState(false);

  return (
    <div className="App">
      <HeaderNavigation
        setCurrentForm={setCurrentForm}
        setModalActive={setModalActive}
      />
      <PopupFade
        currentForm={currentForm}
        setModalActive={setModalActive}
        modalActive={modalActive}
      />
    </div>
  );
};

export default App;
