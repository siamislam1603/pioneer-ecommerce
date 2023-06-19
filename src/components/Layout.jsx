import {Container} from '@mui/material'
import {Outlet} from 'react-router-dom'
import Header from './Header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
