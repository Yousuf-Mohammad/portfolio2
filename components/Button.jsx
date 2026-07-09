"use client"
import Link from 'next/link'

const Button = ({ linkString, buttonName, classNames, target }) => {
  return (
    <Link
      href={linkString}
      target={target}
      rel="noopener noreferrer"
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-bone/5 px-6 font-mono text-sm uppercase tracking-wider text-bone backdrop-blur-sm transition-all duration-300 hover:border-acid hover:bg-acid hover:text-ink ${classNames}`}
    >
      {buttonName}
    </Link>
  )
}

export default Button
