const UnavailableSlot = (props) => {

  return props.reserved ? <span className="unavailable">UNAVAILABLE</span> : <></>
}

export default UnavailableSlot
