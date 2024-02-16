import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./components/MainLayout/Main/Main";
import { Landing } from "./components/pages/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path="/" element={<Landing children={undefined} />}></Route>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
