import Header from '../components/Header'
import ReserveTop from '../components/reserve/ReserveTop'
import Verified from '../components/Verified'
import Footer from '../components/Footer'

const Verify = () => {

  return (
    <>
      <Header />
      <ReserveTop step={3} title="All Done!"/>
      <Verified />
      <Footer />
    </>
  )
}

export default Verify
