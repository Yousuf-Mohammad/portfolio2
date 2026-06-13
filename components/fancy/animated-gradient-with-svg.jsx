"use client";
import React, { useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import { useDimensions } from "@/hooks/use-debounced-dimensions"

const randomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
}

const AnimatedGradient = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef(null)
  const dimensions = useDimensions(containerRef)

  // Per-circle random placement is generated once on the client (in an effect)
  // rather than during render. Calling Math.random() in render produces
  // different values on the server and client and triggers a hydration
  // mismatch, so the server renders no circles until this runs.
  const count = colors.length
  const [circles, setCircles] = useState([])
  useEffect(() => {
    setCircles(
      Array.from({ length: count }, () => ({
        top: `${Math.random() * 50}%`,
        left: `${Math.random() * 50}%`,
        tx1: Math.random() - 0.5,
        ty1: Math.random() - 0.5,
        tx2: Math.random() - 0.5,
        ty2: Math.random() - 0.5,
        tx3: Math.random() - 0.5,
        ty3: Math.random() - 0.5,
        tx4: Math.random() - 0.5,
        ty4: Math.random() - 0.5,
        widthScale: randomFloat(0.2, 0.7),
        heightScale: randomFloat(0.3, 0.7),
      }))
    )
  }, [count])

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height]
  )

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
        ? "blur-[50px]"
        : "blur-[100px]"

  return (
    (<div ref={containerRef} className="absolute inset-0 overflow-hidden rounded-2xl">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {circles.map((c, index) => (
          <svg
            key={index}
            className="absolute animate-background-gradient"
            style={
              {
                top: c.top,
                left: c.left,
                "--background-gradient-speed": `${1 / speed}s`,
                "--tx-1": c.tx1,
                "--ty-1": c.ty1,
                "--tx-2": c.tx2,
                "--ty-2": c.ty2,
                "--tx-3": c.tx3,
                "--ty-3": c.ty3,
                "--tx-4": c.tx4,
                "--ty-4": c.ty4
              }
            }
            width={circleSize * c.widthScale}
            height={circleSize * c.heightScale}
            viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill={colors[index]} />
          </svg>
        ))}
      </div>
    </div>)
  );
}

export default AnimatedGradient
