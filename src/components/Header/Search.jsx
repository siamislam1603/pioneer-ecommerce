import SearchIcon from '@mui/icons-material/Search'
import {IconButton, InputBase, useMediaQuery, useTheme} from '@mui/material'
import {SearchInputContainer} from './styles'

const Search = (props) => {
  const styles = props.styles ?? {}
  const theme = useTheme()
  return (
    <SearchInputContainer
      component="form"
      className="search-input-container"
      sx={{
        pl: '36px',
        alignItems: 'center',
        width: useMediaQuery(theme.breakpoints.between('md', 'lg')) ? 'auto' : 529,
        maxWidth: useMediaQuery(theme.breakpoints.up('lg')) ? 529 : 'none',
        borderRadius: '30px',
        ...styles,
      }}
      elevation={0}
    >
      <InputBase
        size="small"
        sx={{ml: 1, flex: 1}}
        placeholder="Search SnipShop.com"
        inputProps={{'aria-label': 'Search SnipShop.com'}}
      />
      <IconButton type="button" className="search-button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </SearchInputContainer>
  )
}

export default Search
