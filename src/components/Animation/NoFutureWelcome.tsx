import React, {useState} from 'react';
import {motion} from "framer-motion";

const NoFutureWelcome = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div id="first">
            <motion.p className="noFutureWelcome"
                      animate={{
                          x: "50vw",
                          opacity: 1,
                          scale: isAnimating ? 2 : 1,
                          rotate: 360,
                      }}
                      initial={{opacity: 0.1}}
                      transition={{
                          type: "spring",
                          stiffness: 300,
                      }}
                      onClick={() => setIsAnimating((!isAnimating))}
            >
                Welcome to No Future!
            </motion.p>
        </div>
    );
}

export default NoFutureWelcome;