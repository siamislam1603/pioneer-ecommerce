import {Tab} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {updateProductsList} from '../../actions/home'
import {CategoriesTabs} from './styles'

const Categories = ({type, children}) => {
  const dispatch = useDispatch()
  const differentCategories = useSelector((state) => state.categories)
  const {data, selectedIndex} = differentCategories[type]
  const handleChange = (_, newValue) => {
    dispatch(updateProductsList({type, categories: data, selectedIndex: newValue}))
  }
  return (
    <>
      <CategoriesTabs
        value={selectedIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {data.map((category, i) => (
          <Tab key={i} label={category} value={i} />
        ))}
      </CategoriesTabs>
      {children}
    </>
  )
}

export default Categories
