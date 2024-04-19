import { useGlobalContext } from '../../providers/GlobalProvider'
import UnavailableSlot from './UnavailableSlot'
import SelectedSlot from './SelectedSlot'
import SlotButton from './SlotButton'
import SlotUndo from './SlotUndo'

const TimeSlot = (props) => {

  const { timeSlots } = useGlobalContext()

  const reserved = () => {
    const tint = props.slot.reserved ? {
      backgroundColor: '#EE9972',
      color: '#EDEFEE',
      fontWeight: '600'
    } :
    {
      backgroundColor:' #495E57',
      color: '#EDEFEE',
      fontWeight: '600'
    }
    const normal = {
      backgroundColor: 'unset'
    }
    return !props.slot.reserved && !props.slot.selected ? normal : tint
  }

  return (timeSlots && timeSlots.length ?
      <div className="hFrame auto-spread center" style={reserved()}>
        <span>{props.slot.time}</span>
        <UnavailableSlot reserved={props.slot.reserved}/>
        <SelectedSlot selected={props.slot.selected} />
        <SlotButton slot={props.slot}/>
        <SlotUndo time={props.slot.time} selected={props.slot.selected} />
      </div>
      :
      <></>
  )
}

export default TimeSlot
