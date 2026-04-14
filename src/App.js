import "./app.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import FormOrder from "./components/FormOrder/FormOrder";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div div className="wrapper">
      <Header />
      <Home />
      <FormOrder />
      <Footer />
    </div>
  );
}

export default App;
