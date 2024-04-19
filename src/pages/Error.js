import Header from '../components/Header'
import ReserveTop from '../components/reserve/ReserveTop'
import ReservationError from '../components/reserve/ReservationError'
import Footer from '../components/Footer'

const Verify = () => {
  return (
    <>
      <Header />
      <ReserveTop step={3} title="All Done!"/>
      <ReservationError />
      <Footer />
    </>
  )
}

export default Verify