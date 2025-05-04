import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Questionnaire from "./components/Questionnaire";
import Resultat from "./components/Resultat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/resultat" element={<Resultat />} />
      </Routes>
    </Router>
  );
}

export default App;
