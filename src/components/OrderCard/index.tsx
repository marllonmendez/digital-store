import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { motion } from 'framer-motion'

import { IOrderCard } from '@/interface'
import { StylesSelect } from '@/components/OrderCard/StylesSelect'

const OrderCard: React.FC<IOrderCard> = ({ options }) => {
  const animated = makeAnimated()

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="cursor-pointer relative z-20"
    >
      <Select<IOrderCard['options'][number], true>
        components={animated}
        defaultValue={options[0]}
        options={options}
        formatOptionLabel={(option) => (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 'bold' }}>{option.rating}</span>
            <span style={{ fontWeight: 'normal' }}>{option.label}</span>
          </div>
        )}
        isClearable={true}
        isSearchable={false}
        styles={StylesSelect}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'darkGray2',
          },
        })}
        className="w-80"
      />
    </motion.div>
  )
}

export default OrderCard
