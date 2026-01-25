import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isPressed, setIsPressed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const interests = [
    {
      title: 'Programmation',
      description: 'Créer des solutions élégantes à travers le code. Construire des applications qui résolvent des problèmes réels et repoussent les limites technologiques.',
      icon: '{}',
    },
    {
      title: 'Mathématiques',
      description: 'Explorer le langage de l\'univers. Du calcul aux algorithmes, les mathématiques sont le fondement de tout.',
      icon: '∑',
    },
    {
      title: 'Espace',
      description: 'Contempler le cosmos. Comprendre notre place dans l\'univers et les possibilités infinies au-delà.',
      icon: '★',
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {isPressed && (
        <div 
          className="fixed pointer-events-none z-[100] text-accent font-bold text-xl select-none mix-blend-difference"
          style={{ 
            left: mousePos.x, 
            top: mousePos.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          MEONIX
        </div>
      )}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full space-y-12"
      >
        {/* Header */}
        <div className="text-center space-y-4 perspective-1000">
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
            animate={{ 
              scale: [0.5, 1.2, 1],
              opacity: 1,
              rotate: 0,
            }}
            whileHover={{ 
              scale: 0.9,
              rotateX: 20,
              rotateY: -20,
              skewX: 10,
              filter: "blur(2px)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            transition={{ 
              duration: 1.5,
              ease: "easeOut",
              times: [0, 0.6, 1]
            }}
            className={`text-6xl md:text-8xl font-bold tracking-tight text-foreground select-none transition-all ${isPressed ? 'cursor-none opacity-50 scale-75 blur-md' : 'cursor-none'}`}
          >
            MEONIX
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="h-1 w-20 bg-accent mx-auto rounded-full origin-center" 
          />
        </div>

        {/* Description */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center space-y-4"
        >
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Bienvenue dans mon espace numérique. Je suis passionné par l'exploration de l'intersection entre la
            <span className="text-accent font-medium"> programmation</span>, les
            <span className="text-accent font-medium"> mathématiques</span> et l'
            <span className="text-accent font-medium"> espace</span>.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {interests.map((interest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -5 }}
              className="p-6 border border-border rounded-lg bg-secondary/50 transition-all cursor-default"
              data-testid={`card-interest-${idx}`}
            >
              <div className="text-4xl mb-4">{interest.icon}</div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                {interest.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
