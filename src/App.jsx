import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import AppRouter from "./router/AppRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
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
