import { useState, useRef, createContext, useContext } from 'react'

const FormContext = createContext()

const FormProvider = ({children}) => {
  const [ timeSlots, setTimeSlots ] = useState([
    {
      time: '6:00 PM',
      reserved: false,
      selected: false
    },
    {
      time: '6:30 PM',
      reserved: true,
      selected: false
    },
    {
      time: '7:00 PM',
      reserved: false,
      selected: false
    },
    {
      time: '7:30 PM',
      reserved: false,
      selected: false
    },
    {
      time: '8:00 PM',
      reserved: true,
      selected: false
    },
    {
      time: '8:30 PM',
      reserved: false,
      selected: false
    },
    {
      time: '9:00 PM',
      reserved: false,
      selected: false
    }
  ])

  const occasions = useRef([
    'Anniversary',
    'Birthday',
    'Engagement',
    'Reception'
  ])

  const [ formData, setFormData ] = useState({
    date: new Date(),
    timeSlot: '',
    firstName: '',
    lastName: '',
    partyNum: 2,
    email: '',
    occasion: 'none',
    specialAccess: {
      wheelchair: false,
      boosterSeat: {
        requested: false,
        num: 1
      },
      highchair: {
        requested: false,
        num: 1
      }
    }
  })


  const props = {
    timeSlots,
    setTimeSlots,
    occasions,
    formData,
    setFormData
  }

  return (
    <FormContext.Provider value={props}>
      { children }
    </FormContext.Provider>
  )

}

export const useFormContext = () => useContext(FormContext)

export default FormProvider
