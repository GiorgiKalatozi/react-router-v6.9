import MainNavigation from "../components/MainNavigation";
import { Outlet, useLoaderData } from "react-router-dom";

export default function RootLayout() {
  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
