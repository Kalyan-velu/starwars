import AppRouter from "./pages";
import CommonLayout from "./common/layout";
import Hero from "./pages/hero";

export default function App() {
  return (
    <>
      <Hero />
      <CommonLayout>
        <AppRouter />
      </CommonLayout>
    </>
  );
}
