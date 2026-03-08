import "./App.css";
import { BrowserRouter, useLocation } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import AppRouter from "./router/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="page-wrapper">
            <Header />
            <main className="page-content">
              <AppRouter />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
}

export default App;
