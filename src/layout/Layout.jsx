import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Layout = ({Children}) => {
  return (
    <>
    <Header/>
    {Children}
    <Footer/>
      
    </>
  )
}

export default Layout
