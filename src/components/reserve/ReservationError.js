import { useEffect } from 'react'
import { useGlobalContext } from '../../providers/GlobalProvider'

const ReservationError = () => {

  const { clearForm } = useGlobalContext()

  useEffect (() => {
    clearForm()
  }, [clearForm])
  return (
    <div className="checked">
      <h3>Something went wrong!</h3>
      <p>We were not able to register your reservation at this time. Please try again later</p>
    </div>
  )
}

export default ReservationError
