import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import backgroundImg from "../assets/background.png"; 

const Accueil = () => {

    
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });


  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      
      <div 
        className="absolute inset-0 bg-cover bg-center blur-sm" 
        style={{ backgroundImage: `url(${backgroundImg})` }} 
      />

      <div className="relative z-10 text-center p-8 rounded-lg max-w-3xl w-full">
        
        <motion.h1 
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Bienvenue sur le Calculateur de <span className="text-yellow-400">CO₂</span>
        </motion.h1>

        <motion.p 
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg md:text-2xl text-gray-200 mb-8"
        >
          Découvrez votre empreinte carbone quotidienne et comment la réduire.
        </motion.p>

        <motion.button 
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          onClick={() => navigate("/questionnaire")}
          className="bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Commencer le questionnaire
        </motion.button>

      </div>
    </div>
  );
};

export default Accueil;
