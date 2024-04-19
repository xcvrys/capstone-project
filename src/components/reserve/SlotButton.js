import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../../providers/GlobalProvider'

const SlotButton = (props) => {

  const { timeSlots, dispatch, setFormData, setSlotError } = useGlobalContext()

  const button = useRef()

  const select = (e) => {
    dispatch({time: props.slot.time})
    setFormData(prevState => {
      const state = {...prevState}
      state.timeSlot = props.slot.time
      return state
    })
    setSlotError('')
  }

  useEffect(() => {
    if (button.current) button.current.disabled = timeSlots.some(x => x.selected)
  }, [timeSlots])

  return !props.slot.reserved && !props.slot.selected ? <button data-testid={props.slot.time} aria-label="On Click" onClick={select} ref={button}>SELECT</button> : <button disabled style={{display: props.slot.selected ? 'none' : 'inline'}}>SELECT</button>
}

export default SlotButton