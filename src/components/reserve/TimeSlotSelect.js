import { useGlobalContext } from '../../providers/GlobalProvider'
import TimeSlot from './TimeSlot'
import { useRef } from 'react'

const TimeSlotSelect = (props) => {

  const timeslot = useRef('')

  const { formData, slotError } = useGlobalContext()

  return (props.timeSlots && props.timeSlots.length ? (
    <fieldset>
      <div className="hFrame auto-spread center">
        <h6>SELECT TIME SLOT<span> *</span></h6>
        <input id="timeslot" ref={timeslot} data-testid="timeslot" type="text" value={formData.timeSlot} required onChange={e => e.preventDefault()} />
      </div>
      <p>{slotError}</p>
      <div className="hFrame auto-spread">
        <div className="vFrame slotbox">
          {props.timeSlots.map(slot => {
            return (
              <TimeSlot key={slot.time} slot={slot} />
            )
          })}
        </div>
      </div>
    </fieldset>
  ) : <></>
  )
}

export default TimeSlotSelect
