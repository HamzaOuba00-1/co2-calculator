import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../assets/background.png";

// Import your images
import voiture from "../assets/voiture.png";
import transport_public from "../assets/transport.png";
import velo_marche from "../assets/velo.png";
import voiture_electrique from "../assets/voiture_electrique.png";

import distance_5km from "../assets/distance_5km.png";
import distance_20km from "../assets/distance_20km.png";
import distance_50km from "../assets/distance_50km.png";
import distance_50plus from "../assets/distance_50+.png";

import avion_jamais from "../assets/avion_jamais.png";
import avion_2fois from "../assets/avion_2fois.png";
import avion_5fois from "../assets/avion_5fois.png";
import avion_plus5 from "../assets/avion_plus5.png";

import carnivore from "../assets/carnivore.png";
import flexitarien from "../assets/omnivore.png";
import vegetarien from "../assets/vegetarien.png";
import vegan from "../assets/vegan.png";

import viande_7 from "../assets/viande_7.png";
import viande_4 from "../assets/viande_4.png";
import viande_1 from "../assets/viande_1.png";
import viande_jamais from "../assets/viande_jamais.png";

import import_souvent from "../assets/import_souvent.png";
import import_parfois from "../assets/import_parfois.png";
import import_rarement from "../assets/import_rarement.png";
import import_jamais from "../assets/import_jamais.png";

import gaz from "../assets/gaz.png";
import elec from "../assets/elec.png";
import renewable from "../assets/energy.png";
import bois from "../assets/chauffage.png";

import logement_50 from "../assets/logement_50.png";
import logement_100 from "../assets/logement_100.png";
import logement_150 from "../assets/logement_150.png";
import logement_plus150 from "../assets/logement_plus150.png";

import vetement_5plus from "../assets/vetement_5plus.png";
import vetement_3 from "../assets/vetement_3.png";
import vetement_1 from "../assets/vetement_1.png";
import vetement_aucun from "../assets/vetement_aucun.png";

import recycle_non from "../assets/recycle_non.png";
import recycle_rarement from "../assets/recycle_rarement.png";
import recycle_parfois from "../assets/recycle_parfois.png";
import recycle_oui from "../assets/recycle_oui.png";


const questions = [
  // 1) TRANSPORT PRINCIPAL
  {
    question:
      "Quel est votre moyen de transport principal pour vos déplacements quotidiens ?",
    options: [
      {
        text: "Voiture",
        value: "voiture",
        img: voiture,
        co2: 3.0,
        tip: "Envisagez le covoiturage ou d’opter pour les transports en commun pour diminuer la pollution.",
      },
      {
        text: "Transport en commun",
        value: "transport_public",
        img: transport_public,
        co2: 1.0,
        tip: "Essayez de privilégier encore plus le transport en commun ou le vélo pour les courtes distances.",
      },
      {
        text: "Vélo ou marche",
        value: "velo_marche",
        img: velo_marche,
        co2: 0.3,
        tip: "Vous faites déjà un geste fort pour l’environnement ! Continuez à privilégier le vélo ou la marche.",
      },
      {
        text: "Véhicule électrique",
        value: "voiture_electrique",
        img: voiture_electrique,
        co2: 1.5,
        tip: "Rechargez votre véhicule sur des bornes vertes si possible, pour réduire encore plus l’empreinte carbone.",
      },
    ],
  },
  // 2) KILOMETRES / JOUR
  {
    question: "Combien de kilomètres parcourez-vous en moyenne par jour ?",
    options: [
      {
        text: "Moins de 5 km",
        value: "moins_5km",
        img: distance_5km,
        co2: 0.5,
        tip: "De courtes distances : la marche ou le vélo sont idéals pour vos trajets quotidiens !",
      },
      {
        text: "Entre 5 et 20 km",
        value: "5_20km",
        img: distance_20km,
        co2: 1.5,
        tip: "Tentez de combiner vos déplacements pour réduire les allers-retours superflus.",
      },
      {
        text: "Entre 20 et 50 km",
        value: "20_50km",
        img: distance_50km,
        co2: 3.0,
        tip: "Envisagez le covoiturage ou les transports en commun sur certaines distances.",
      },
      {
        text: "Plus de 50 km",
        value: "plus_50km",
        img: distance_50plus,
        co2: 5.0,
        tip: "De longs trajets quotidiens : examinez la possibilité de télétravail ou le train quand c’est faisable.",
      },
    ],
  },
  // 3) AVION
  {
    question:
      "Combien de fois par an prenez-vous l'avion pour des trajets courts (moins de 3 heures) ?",
    options: [
      {
        text: "Jamais",
        value: "jamais",
        img: avion_jamais,
        co2: 0,
        tip: "Ne pas prendre l’avion réduit considérablement l’empreinte carbone.",
      },
      {
        text: "1 à 2 fois",
        value: "1_2",
        img: avion_2fois,
        co2: 0.5,
        tip: "Pour de courts trajets, le train ou le covoiturage peuvent être de bonnes alternatives.",
      },
      {
        text: "3 à 5 fois",
        value: "3_5",
        img: avion_5fois,
        co2: 1.2,
        tip: "Regroupez vos déplacements et privilégiez des modes moins carbonés si possible.",
      },
      {
        text: "Plus de 5 fois",
        value: "plus_5",
        img: avion_plus5,
        co2: 2.0,
        tip: "L’avion reste très émetteur : limitez les trajets courts en avion ou optez pour des vols directs.",
      },
    ],
  },

  // 4) REGIME ALIMENTAIRE
  {
    question: "Quel est votre régime alimentaire principal ?",
    options: [
      {
        text: "Très carnivore",
        value: "carnivore",
        img: carnivore,
        co2: 3.0,
        tip: "Réduire la viande rouge et privilégier le poulet, le poisson ou les repas végétariens aide beaucoup.",
      },
      {
        text: "Flexitarien",
        value: "flexitarien",
        img: flexitarien,
        co2: 2.0,
        tip: "Continuez à diminuer progressivement votre consommation de viande pour réduire votre empreinte.",
      },
      {
        text: "Végétarien",
        value: "vegetarien",
        img: vegetarien,
        co2: 1.0,
        tip: "Déjà un impact plus faible : diversifiez les sources de protéines végétales pour un équilibre optimal.",
      },
      {
        text: "Végan",
        value: "vegan",
        img: vegan,
        co2: 0.5,
        tip: "Une alimentation sans protéines animales contribue à réduire significativement l’empreinte carbone.",
      },
    ],
  },
  // 5) VIANDE ROUGE / SEMAINE
  {
    question:
      "Combien de repas par semaine contiennent de la viande rouge (bœuf, agneau) ?",
    options: [
      {
        text: "7 ou plus",
        value: "7+",
        img: viande_7,
        co2: 1.5,
        tip: "La viande rouge est énergivore à produire : essayez d’en réduire la fréquence.",
      },
      {
        text: "4 à 6",
        value: "4_6",
        img: viande_4,
        co2: 1.0,
        tip: "Réduisez encore un peu votre consommation de viande rouge pour diminuer votre impact.",
      },
      {
        text: "1 à 3",
        value: "1_3",
        img: viande_1,
        co2: 0.5,
        tip: "Une consommation modérée de viande rouge : essayez des substituts végétaux de temps en temps.",
      },
      {
        text: "Jamais",
        value: "jamais",
        img: viande_jamais,
        co2: 0,
        tip: "Éviter totalement la viande rouge aide significativement à réduire l’empreinte carbone.",
      },
    ],
  },
  // 6) PRODUITS IMPORTES
  {
    question:
      "Achetez-vous souvent des produits alimentaires importés (hors saison ou de l'étranger) ?",
    options: [
      {
        text: "Très souvent",
        value: "tres_souvent",
        img: import_souvent,
        co2: 1.5,
        tip: "Favorisez des produits locaux et de saison pour réduire le transport et l’empreinte carbone.",
      },
      {
        text: "Parfois",
        value: "parfois",
        img: import_parfois,
        co2: 1.0,
        tip: "Essayez d’acheter plus régulièrement local, surtout pour les fruits et légumes.",
      },
      {
        text: "Rarement",
        value: "rarement",
        img: import_rarement,
        co2: 0.5,
        tip: "Privilégier le local autant que possible reste la meilleure option.",
      },
      {
        text: "Jamais",
        value: "jamais",
        img: import_jamais,
        co2: 0,
        tip: "Exclusivement local : c’est une excellente pratique pour limiter l’empreinte carbone.",
      },
    ],
  },

  // 7) SOURCE D'ENERGIE
  {
    question: "Quelle est la source d'énergie principale de votre logement ?",
    options: [
      {
        text: "Gaz naturel",
        value: "gaz",
        img: gaz,
        co2: 3.0,
        tip: "Envisagez une meilleure isolation ou un passage à une énergie plus verte pour réduire vos émissions.",
      },
      {
        text: "Électricité",
        value: "elec",
        img: elec,
        co2: 2.0,
        tip: "Vérifiez la provenance de votre électricité et adoptez des gestes économes (ampoules LED, etc.).",
      },
      {
        text: "Énergies renouvelables",
        value: "renewable",
        img: renewable,
        co2: 1.0,
        tip: "Déjà très vertueux ! Poursuivez en optimisant l’isolation et les équipements basse consommation.",
      },
      {
        text: "Chauffage (bois)",
        value: "bois",
        img: bois,
        co2: 1.5,
        tip: "Veillez à utiliser un bois local et bien sec pour limiter la pollution.",
      },
    ],
  },
  // 8) TAILLE LOGEMENT
  {
    question: "Quelle est la taille de votre logement ?",
    options: [
      {
        text: "Moins de 50 m²",
        value: "moins_50",
        img: logement_50,
        co2: 1.0,
        tip: "Petit logement : contrôlez vos dépenses énergétiques pour encore plus d’économies.",
      },
      {
        text: "Entre 50 et 100 m²",
        value: "50_100",
        img: logement_100,
        co2: 2.0,
        tip: "Pensez à améliorer l’isolation, le chauffage et l’éclairage pour réduire l’empreinte.",
      },
      {
        text: "Entre 100 et 150 m²",
        value: "100_150",
        img: logement_150,
        co2: 3.0,
        tip: "Un logement plus grand nécessite plus d’énergie : isolez combles et murs.",
      },
      {
        text: "Plus de 150 m²",
        value: "plus_150",
        img: logement_plus150,
        co2: 4.0,
        tip: "Beaucoup de surface : l’audit énergétique peut vous aider à cibler où réduire la consommation.",
      },
    ],
  },

  // 9) ACHATS DE VETEMENTS
  {
    question: "Combien de nouveaux vêtements achetez-vous par mois ?",
    options: [
      {
        text: "Plus de 5",
        value: "plus_5",
        img: vetement_5plus,
        co2: 2.0,
        tip: "La mode responsable : achetez moins mais mieux, privilégiez la seconde main.",
      },
      {
        text: "3 à 5",
        value: "3_5",
        img: vetement_3,
        co2: 1.5,
        tip: "Envisagez la friperie ou des marques éco-responsables pour un impact moindre.",
      },
      {
        text: "1 à 2",
        value: "1_2",
        img: vetement_1,
        co2: 1.0,
        tip: "Limiter les achats superflus et allonger la durée de vie des vêtements restent clé.",
      },
      {
        text: "Aucun",
        value: "aucun",
        img: vetement_aucun,
        co2: 0,
        tip: "Bravo, votre consommation de vêtements ne crée pas d’impact supplémentaire.",
      },
    ],
  },
  // 10) RECYCLAGE
  {
    question: "Recyclez-vous vos déchets régulièrement ?",
    options: [
      {
        text: "Jamais",
        value: "jamais",
        img: recycle_non,
        co2: 1.5,
        tip: "Le recyclage réduit l’empreinte carbone, essayez de vous y mettre progressivement.",
      },
      {
        text: "Rarement",
        value: "rarement",
        img: recycle_rarement,
        co2: 1.0,
        tip: "En identifiant facilement vos déchets recyclables, vous pouvez encore progresser.",
      },
      {
        text: "Parfois",
        value: "parfois",
        img: recycle_parfois,
        co2: 0.5,
        tip: "Triez plus régulièrement plastiques, cartons, verres pour davantage d’impact positif.",
      },
      {
        text: "Toujours",
        value: "toujours",
        img: recycle_oui,
        co2: 0.2,
        tip: "Vous faites déjà un beau geste pour l’environnement, poursuivez ainsi !",
      },
    ],
  },
];

const Questionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const [totalCO2, setTotalCO2] = useState(0);
  const [collectedTips, setCollectedTips] = useState([]);

  const navigate = useNavigate();
  const currentQuestion = questions[currentQuestionIndex];

  const selectOption = (option) => {
    setSelectedOption(option);
  };

  const goToNextQuestion = () => {
    if (!selectedOption) return; // ensure user picked something

    setTotalCO2((prev) => prev + selectedOption.co2);
    setCollectedTips((prevTips) => [...prevTips, selectedOption.tip]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      const finalTotal = totalCO2 + selectedOption.co2;
      const finalTips = [...collectedTips, selectedOption.tip];

      navigate("/resultat", {
        state: {
          total: finalTotal,
          tips: finalTips,
        },
      });
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <div className="relative z-10 text-center p-6 md:p-8 rounded-lg max-w-5xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
        >
          {currentQuestion.question}
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center md:space-x-6 space-y-4 md:space-y-0">
          {currentQuestion.options.map((option) => (
            <motion.div
              key={option.value}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`cursor-pointer w-full md:w-72 h-40 md:h-48 flex flex-col justify-center items-center p-2 rounded-lg shadow-lg 
              transition transform hover:scale-105
              ${
                selectedOption?.value === option.value
                  ? "border-4 border-green-500 bg-white"
                  : "border-2 border-gray-300 bg-white"
              }
            `}
              onClick={() => selectOption(option)}
            >
              <img
                src={option.img}
                alt={option.text}
                className="w-24 h-24 md:w-40 md:h-40 mb-0 mt-8"
              />
              <p className="text-sm md:text-lg font-semibold text-black text-center mb-8">
                {option.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          onClick={goToNextQuestion}
          className="bg-yellow-400 text-black px-6 md:px-8 py-3 rounded-full text-sm md:text-lg font-semibold mt-6 md:mt-10 hover:bg-yellow-500 transition duration-300 shadow-md"
        >
          Suivant
        </motion.button>
      </div>
    </div>
  );
};

export default Questionnaire;
