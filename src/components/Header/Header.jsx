import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import {Badge, Button, IconButton, InputBase, Paper, Stack, Toolbar} from '@mui/material'
import {Logo, NavBar} from './styles'

const menuItems = [
  {icon: <PermIdentityOutlinedIcon />, title: 'Account'},
  {icon: <FavoriteBorderOutlinedIcon />, title: 'My Items'},
  {icon: <ShoppingBagOutlinedIcon />, isBadge: true},
  {icon: <MenuOutlinedIcon />},
]

const Header = () => {
  return (
    <NavBar>
      <Toolbar>
        <Logo src="assets/images/logo.png" alt="" />
        <Paper
          component="form"
          className="search-input-container"
          sx={{pl: '36px', display: 'flex', alignItems: 'center', width: 529, borderRadius: '30px'}}
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
        </Paper>
        <Stack direction="row" alignItems="center" spacing={1} className="menu-items">
          {menuItems.map((item, i) => (
            <Stack key={i} direction="row" alignItems="center" spacing={1}>
              {item.title ? (
                <Button className="menu-button" startIcon={<>{item.icon}</>}>
                  <span className="title">{item.title}</span>
                </Button>
              ) : item.isBadge ? (
                <Badge color="secondary" badgeContent={1} size="small">
                  {item.icon}
                </Badge>
              ) : (
                <IconButton sx={{color: 'white', pl: 3}} className="hamburger-icon">
                  {item.icon}
                </IconButton>
              )}
            </Stack>
          ))}
        </Stack>
      </Toolbar>
    </NavBar>
  )
}

export default Header
