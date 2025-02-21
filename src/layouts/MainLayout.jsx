import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
