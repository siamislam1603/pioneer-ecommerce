import {styled} from '@mui/material'
import {Outlet} from 'react-router-dom'
import Header from './Header/Header'

const Offset = styled('div')(({theme}) => theme.mixins.toolbar)
const Layout = () => {
  return (
    <>
      <Header />
      <Offset />
      <Outlet />
    </>
  )
}

export default Layout
