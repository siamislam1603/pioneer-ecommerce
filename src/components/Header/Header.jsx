import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import {Badge, Button, IconButton, Stack, Toolbar, useMediaQuery, useTheme} from '@mui/material'
import {Logo, NavBar} from './styles'
import Search from './Search'

const menuItems = [
  {icon: <PermIdentityOutlinedIcon />, title: 'Account'},
  {icon: <FavoriteBorderOutlinedIcon />, title: 'My Items'},
  {icon: <ShoppingBagOutlinedIcon />, isBadge: true},
  {icon: <MenuOutlinedIcon />},
]

const Header = () => {
  const theme = useTheme()
  return (
    <>
      <NavBar elevation={0}>
        <Toolbar>
          <Logo
            src={
              useMediaQuery(theme.breakpoints.up('sm'))
                ? 'assets/images/logo.png'
                : 'assets/images/logo-small.png'
            }
            alt=""
          />
          <Search/>
          <Stack
            direction="row"
            alignItems="center"
            spacing={useMediaQuery(theme.breakpoints.down('sm')) ? 0 : 1}
            className="menu-items"
          >
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
    </>
  )
}

export default Header
