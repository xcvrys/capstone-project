import Header from '../components/Header'
import ReserveTable from '../components/reserve/ReserveTable'
import ReserveForm from '../components/reserve/ReserveForm'
import Footer from '../components/Footer'

const Reservation = () => {


  return (
    <article>
      <Header />
      <main>
        <ReserveTable />
        <ReserveForm />
        <Footer />
      </main>
    </article>
  )
}

export default Reservation
