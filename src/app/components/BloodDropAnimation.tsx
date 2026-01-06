import { motion } from "motion/react";

interface BloodDropAnimationProps {
  isDarkMode: boolean;
}

export function BloodDropAnimation({ isDarkMode }: BloodDropAnimationProps) {
  const drops = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2,
    size: 4 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className={`absolute ${isDarkMode ? 'bg-red-600' : 'bg-red-500'} rounded-full opacity-20`}
          style={{
            left: drop.left,
            width: drop.size,
            height: drop.size,
          }}
          initial={{ top: "-10%", opacity: 0 }}
          animate={{
            top: "110%",
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
