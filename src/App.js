import Main from "./components/Main";
import MyApp from "./components/MyApp";
import Player from "./components/Player";

import { Routes, Route } from "react-router";
import NotFound from "./components/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Player" element={<Player />} />
        <Route path="/MyApp" element={<MyApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
