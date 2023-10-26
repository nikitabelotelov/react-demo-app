import { Routes, Route } from "react-router-dom";
import { Search } from "./pages/search";

function App() {
  return (
    <Routes>
      <Route index element={<Search />} />
    </Routes>
  );
}

export default App;
