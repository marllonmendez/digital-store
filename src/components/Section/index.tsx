import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { ISection } from '@/interface'

import Button from '@/components/Button'
import { Link } from 'react-router-dom'

const Section: React.FC<ISection> = ({
  title,
  titleAlign,
  className,
  children,
  button,
}) => {
  return (
    <section className="flex flex-col">
      <div
        className={`${button === true ? 'flex items-center justify-between' : null}`}
      >
        <h2
          className={`text-2xl text-darkGray2 font-bold py-10 ${titleAlign} ${titleAlign === 'text-left' ? 'pt-9 pb-5' : 'pt-24 pb-5'}`}
        >
          {title}
        </h2>
        {button && (
          <Link to={'/produtos'}>
            <Button
              label="Ver todos"
              className="bg-none font-normal w-32 h-10 text-primary gap-2 pt-9 pb-5 hover:text-tertiary ease-in transition-all duration-300"
              icon={BsArrowRight}
            />
          </Link>
        )}
      </div>
      <div className={`${className}`}>{children}</div>
    </section>
  )
}

export default Section
