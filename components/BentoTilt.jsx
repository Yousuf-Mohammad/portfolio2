import React from "react"
import { useState, useRef } from "react"
const BentoTilt =({children , className=" "})=>{

    const [transformStyle,setTransformStyle] = useState('')
    const itemRef = useRef()
    const handleMouseMove=(e)=>{
        if(!itemRef.current) return;

        const {left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) /width;
        const relativeY = (e.clientY -top ) /height; 

        const tiltX =  (relativeY-0.5) *5;
        const tiltY =  (relativeX-0.5) *-5;

        const newTransformation = `perspective(700px) rotateX(${tiltX}deg)
        rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
        setTransformStyle(newTransformation)
    }
    const handleMosueLeave=()=>{
        setTransformStyle('')
    }
    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMosueLeave} style={{transform:transformStyle}}>
            {children}
        </div>
    )
}

export default BentoTilt