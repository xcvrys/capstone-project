import Header from '../components/Header'
import Itinerary from '../components/confirm/Itinerary'
import ReserveTop from '../components/reserve/ReserveTop'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../providers/GlobalProvider'

const Confirm = () => {

  const navigate = useNavigate()

  const { formData, highchair, booster, timeSlots, dispatch } = useGlobalContext()

  const confirmReservation = (e) => {
    const data = {...formData, highchair, booster}
    submitData(data)
      .then(response => {
        localStorage.setItem(data.date, JSON.stringify(timeSlots))
        navigate('/verify')
      })
      .catch(e => {
        navigate('/error')
      })
  }

  const submitData = (data) => {
    return new Promise((resolve, reject) => {
      const success = Math.random()
      if (success < 0.8) {
        dispatch({ type: 'update' })
      }
      setTimeout(() => {
        if (success < 0.8) {
          resolve(true)
        } else {
          reject(false)
        }
      }, Math.random() * 1000)
    })
  }

  return (
    <article>
      <Header />
      <ReserveTop step={2} title="Please Review and Confirm Your Itinerary"/>
      <Itinerary />
      <section className="row justify-content-center">
        <div className="col-8">
          <div className="hFrame auto-spread">
            <Link to="/reservations"><button>EDIT</button></Link>
            <button aria-label="On Click" onClick={confirmReservation}>CONFIRM</button>
          </div>
        </div>
      </section>
      <Footer />
    </article>
  )
}

export default Confirm
