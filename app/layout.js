import "./global.css";
import Sidebar from "./components/Sidebar";
import { personalData } from "../data/page-data";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="flex flex-col sm:flex-row">
        <Sidebar data={personalData} />
        <main className="grow-full w-full p-8 sm:basis-2/3 sm:p-16 ml-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
