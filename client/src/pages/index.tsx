import Movies from "./movies";
import Favorite from "./favorites";
import { Route, Routes } from "react-router-dom";
import FoundNot from "../common/components/FoundNot";

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='/*' element={<FoundNot />} />
    </Routes>
  );
};

export default AppRouter;
