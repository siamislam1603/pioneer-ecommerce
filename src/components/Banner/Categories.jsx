import {Tab} from '@mui/material'
import {useState} from 'react'
import {CategoriesTabs} from './styles'

const Categories = ({categories, children}) => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <CategoriesTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {categories.map((category, i) => (
          <Tab key={i} label={category} value={i} />
        ))}
      </CategoriesTabs>
      {children}
    </>
  )
}

export default Categories
