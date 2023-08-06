import Navbar from "./common/components/Navbar";
import AppRouter from "./pages";
import CommonLayout from "./common/layout";

export default function App() {
  return (
    <>
      <Navbar />
      <CommonLayout>
        <AppRouter />
      </CommonLayout>
    </>
  );
}
