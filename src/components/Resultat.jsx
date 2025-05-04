import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import backgroundImg from "../assets/background.png";

const Resultat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { total = 0, tips = [] } = location.state || {};

  let severityLabel, severityColor;
  if (total < 6) {
    severityLabel = "Faible";
    severityColor = "text-green-600";
  } else if (total < 15) {
    severityLabel = "Modérée";
    severityColor = "text-orange-500";
  } else {
    severityLabel = "Élevée";
    severityColor = "text-green-600";
  }
  const goBackToQuestionnaire = () => {
    navigate("/");
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />

      <div className="relative z-10 text-center p-6 md:p-8 rounded-lg max-w-5xl w-full flex flex-col items-center">
        <h2 className="text-white text-xl md:text-4xl font-bold mb-4">
          L’émission moyenne de CO₂ / jour
        </h2>

        <p className="text-4xl md:text-5xl font-bold text-yellow-300 mb-12">
          {total.toFixed(2)} kg
        </p>

        <p className={`text-xl md:text-4xl font-bold mb-12 ${severityColor}`}
            style={{ backgroundColor: "#fff", opacity: 0.8, padding: "10px", borderRadius: "10px" }}>        
          Gravité {severityLabel}
        </p>

        <div
          className="w-full max-w-5xl mx-auto p-6 md:p-8 rounded shadow-md mb-12"
          style={{ backgroundColor: "#7f8e62" }}
        >
          <h3 className="text-white text-xl md:text-4xl font-bold mb-4">
            Conseils Personnalisés
          </h3>

          {tips.length > 0 ? (
            <ul className="text-white text-left list-disc list-inside space-y-2">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          ) : (
            <p className="text-white">Aucun conseil à afficher.</p>
          )}
        </div>
        <button
          onClick={goBackToQuestionnaire}
          className="mt-4 px-6 py-3 bg-yellow-400 rounded-full font-semibold hover:bg-yellow-500 transition duration-300 shadow-md"
        >
          Recommencer
        </button>
      </div>
    </div>
  );
};

export default Resultat;
