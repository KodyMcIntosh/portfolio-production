import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";
import PageBody from "./components/pageBody";

function App() {
  const styles = {
    backgroundImage: "url(/purple-background.jpg)",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="App">
      <div className="body" style={styles}>
        <Router>
          <Header />
          <div className="pageBody">
            <PageBody />
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
