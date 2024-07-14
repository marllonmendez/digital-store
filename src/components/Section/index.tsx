import React from 'react'

import { ISection } from '@/interface'

const Section: React.FC<ISection> = ({ title, titleAlign, link, children }) => {
  return (
    <section className={`${titleAlign}`}>
      <div>
        <h1>{title}</h1>
        {link && <a href={link.href}>{link.text}</a>}
      </div>
      <div>{children}</div>
    </section>
  )
}

export default Section
