import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <main className="flex h-auto w-full flex-col items-center justify-center bg-sky-950 px-14 pb-24 pt-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
