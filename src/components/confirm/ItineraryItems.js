import { useGlobalContext } from '../../providers/GlobalProvider'

const ItineraryItems = () => {

  const { formData, booster, highchair } = useGlobalContext()

  const Wheelchair = () => {
    return formData.wheelchair ? (
      <div className="hFrame auto-spread center">
        <div>Wheelchair Access</div>
        <div>{ formData.wheelchair }</div>
      </div>
    ) :
    <></>
  }

  const Highchair = () => {
    return highchair.requested ? (
      <div className="hFrame auto-spread center">
        <div>Highchair</div>
        <div>{ highchair.num }</div>
      </div>
    ) :
    <></>
  }

  const BoosterSeat = () => {
    return booster.requested ? (
      <div className="hFrame auto-spread center">
        <div>BoosterSeat</div>
        <div>{ booster.num }</div>
      </div>
    ) :
    <></>
  }
  return (
    <>
      <h1>Itinerary</h1>
      <div className="hFrame auto-spread center">
        <div>Name</div>
        <div>{formData.firstName} {formData.lastName}</div>
      </div>
      <div className="hFrame auto-spread center">
        <div>Email</div>
        <div>{formData.email}</div>
      </div>
      <div className="hFrame auto-spread center">
        <div>Dining</div>
        <div>{formData.partyNum.toString()}</div>
      </div>
      <div className="hFrame auto-spread center">
        <div>Date</div>
        <div>{formData.date}</div>
      </div>
      <div className="hFrame auto-spread center">
        <div>Time</div>
        <div>{formData.timeSlot}</div>
      </div>
      <div className="hFrame auto-spread center">
        <div>Occasion</div>
        <div>{formData.occasion}</div>
      </div>
      <div className="accommodation">Accommodations</div>
      <Wheelchair />
      <Highchair />
      <BoosterSeat />
    </>
  )
}

export default ItineraryItems
