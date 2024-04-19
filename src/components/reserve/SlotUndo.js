import { useGlobalContext } from '../../providers/GlobalProvider'

const SlotUndo = (props) => {

  const { dispatch, setFormData } = useGlobalContext()

  const undoSelect = (e) => {
    e.preventDefault()
    dispatch({ type: 'undo', time: props.time })
    setFormData (prevState => {
      const state = {...prevState}
      state.timeSlot = ""
      return state
    })
  }

  return props.selected ? <button aria-label="On Click" onClick={undoSelect}>UNDO</button> : <></>
}

export default SlotUndo
