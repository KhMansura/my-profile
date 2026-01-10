// "use client";
// import { motion, useScroll, useSpring } from "framer-motion";

// export default function ScrollIndicator() {
//   const { scrollYProgress } = useScroll();
  
//   // useSpring makes the movement "bouncy" and smooth rather than robotic
//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   });

//   return (
//     <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-50 hidden md:flex">
//       {/* Upper Label (Optional) */}
//       <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 rotate-90 mb-4">
//         UP
//       </span>

//       {/* The Track */}
//       <div className="h-48 w-[2px] bg-white/10 rounded-full relative overflow-hidden">
//         {/* The Filling Indicator */}
//         <motion.div
//           className="absolute top-0 left-0 w-full bg-white origin-top"
//           style={{ scaleY }}
//         />
//       </div>

//       {/* Lower Label (Optional) */}
//       <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 rotate-90 mt-4">
//         DOWN
//       </span>
//     </div>
//   );
// }
"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll movement
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-6 top-0 h-full w-px flex items-center justify-center z-50 hidden md:flex">
      {/* The Full Page Track (The dim line) */}
      <div className="h-[300px] w-[2px] bg-white/10 rounded-full relative">
        
        {/* The Progress Indicator (The bright moving line) */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-white rounded-full origin-top shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          style={{ 
            scaleY: scaleY,
            height: '100%' 
          }}
        />

        {/* Decorative Dot at the bottom of the track */}
        <div className="absolute -bottom-1 -left-[3px] w-2 h-2 rounded-full bg-white/20 border border-white/10" />
      </div>
    </div>
  );
}