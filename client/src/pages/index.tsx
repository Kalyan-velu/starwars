import Movies from "./movies";
import Favorite from "./favorites";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/favorite' element={<Favorite />} />
    </Routes>
  );
};

export default AppRouter;
