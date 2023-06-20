import {Tab, Tabs, styled} from '@mui/material'
import {useState} from 'react'

const categories = [
  'Jewelry & Accessories',
  'Clothing & Shoes',
  'Home & Living',
  'Wedding & Party',
  'Toys & Entertainment',
  'Art & Collectibles',
  'Craft Supplies & Tools',
  'Vintage',
]

const CategoriesTabs = styled(Tabs)(
  ({theme}) => `
    .MuiTab-root{
        text-transform:inherit;
        color: ${theme.palette.muted.contrastText};
        &.Mui-selected{
            color:${theme.palette.primary.contrastText};
        }
    }
    .MuiTabs-indicator{
        color:${theme.palette.primary.contrastText};
    }
`
)
const Categories = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <CategoriesTabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
      aria-label="scrollable force tabs example"
    >
      {categories.map((category, i) => (
        <Tab key={i} label={category} />
      ))}
    </CategoriesTabs>
  )
}

export default Categories
