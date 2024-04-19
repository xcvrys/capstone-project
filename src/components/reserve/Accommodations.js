import { useGlobalContext } from '../../providers/GlobalProvider'
import { useRef } from 'react'

const Accommodations = () => {

  const { booster, setFormData, setBooster, highchair, setHighchair } = useGlobalContext()

  let chair = useRef(false)
  let seat = useRef(false)
  let wheel = useRef(false)


  const chairNum = (e) => {
    setHighchair(prevState => {
      const state = {...prevState}
      state.num = Number(e.target.value)
      return state
    })
  }
  const seatNum = (e) => {
    setBooster(prevState => {
      const state = {...prevState}
      state.num = Number(e.target.value)
      return state
    })
  }

  const ChairCount = (props) => {

    const { highchair } = useGlobalContext()

    return props.show ? <input
      type="number"
      min="1"
      max="10"
      id="highchair"
      value={highchair.num}
      onChange={chairNum}></input>
      : <input type="number" min="1" max="10" disabled></input> 
  }

  const SeatCount = (props) => {

    const { booster } = useGlobalContext()

    return props.show ? <input
        type="number"
        min="1"
        max="10"
        id="booster"
        value={booster.num}
        onChange={seatNum}></input>
        : <input type="number" min="1" max="10" disabled></input>
  }

  const changeWheelchair = (e) => {
    wheel.current = wheel.current === (e.target.value === 'true') ? false : true
    setFormData(prevState => {
      const state = {...prevState}
      state.wheelchair = wheel.current
      return state
    })
  }
  const changeHighchair = (e) => {
    chair.current = chair.current === (e.target.value === 'true') ? false : true
    setHighchair(prevState => {
      const state = {...prevState}
      state.requested = chair.current
      if (!chair.current) state.num = 1
      return state
    })
  }
  const changeBooster = (e) => {
    seat.current = seat.current === (e.target.value === 'true') ? false : true
    setBooster(prevState => {
      const state = {...prevState}
      state.requested = seat.current
      if (!seat.current) state.num = 1
      return state
    })
  }
  return (
    <section>
      <h3>Will you need special accommodations?</h3>
      <div className="hFrame center">
        <input id="wheelchair" type="checkbox" name="wheelchair" value="true" onChange={changeWheelchair}></input>
        <label htmlFor="wheelchair">Wheelchair Access</label>
      </div>
      <div className="hFrame auto-spread center">
        <div className="hFrame center">
          <input id="highchair" type="checkbox" name="highchair" value="true" onChange={changeHighchair}></input>
          <label htmlFor="highchair">Highchair</label>
        </div>
        <ChairCount show={highchair.requested}/>
      </div>
      <div className="hFrame auto-spread center">
        <div className="hFrame center">
          <input id="booster" type="checkbox" name="booster" value="true" onChange={changeBooster}></input>
          <label htmlFor="booster">Booster Seat</label>
        </div>
        <SeatCount show={booster.requested}/>
      </div>
    </section>
  )
}

export default Accommodations
