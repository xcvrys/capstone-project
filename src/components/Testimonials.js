import { useGlobalContext } from '../providers/GlobalProvider'
import RatingComment from '../components/RatingComment'

const Testimonials = () => {

  const { testimonies } = useGlobalContext()

  return (
    <section id="testimony">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="row">
            <h1>Testimonials</h1>
            <div className="hFrameWrap auto-space center">
              {testimonies.map(testimony => {
                return <RatingComment key={testimony.key} testimony={testimony} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
