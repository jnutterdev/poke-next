
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <section>{children}</section>
      <Footer />
    </>
  )
}