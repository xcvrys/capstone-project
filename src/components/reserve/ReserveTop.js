import Step from '../Step'

const ReserveTop = (props) => {
  return (
    <section id="reserve-top" className="row justify-content-center">
      <div className="col-10 col-md-8">
        <Step step={props.step}/>
        <h1>Table Reservation</h1>
        <div className="prompt">{props.title}</div>
      </div>
    </section>
  )
}

export default ReserveTop
