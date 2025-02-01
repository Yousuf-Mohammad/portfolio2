import React, { Children } from 'react'
import BentoTilt from './BentoTilt'
import AnimatedGradient from './fancy/animated-gradient-with-svg'
import { motion } from "motion/react"
import Image from 'next/image'
const BentoCard = ({children,className,colors}) => {
  return (
    <BentoTilt  className={ `bg-black relative rounded-2xl ${className} border-white border-[1px]` }>
            <motion.div className=''
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
                
                <AnimatedGradient colors={colors=["#f54b4b", "#4287f5", "#b342f5"]} speed={0.1} blur='medium'/>
                <motion.div
                className="relative z-10 p-3 sm:p-5 md:p-8 text-foreground dark:text-muted rounded-2xl text-white"

                initial="hidden"
                animate="show"
        >
        {children}
        </motion.div>
        </motion.div>
        </BentoTilt>   
  )
}

export default BentoCard