import { useGlobalContext } from '../providers/GlobalProvider'
import FeatureDish from '../components/FeatureDish'

const Highlights = () => {

  const { featureDishes } = useGlobalContext()

  return (
    <article id="highlights">
      <div className="row justify-content-center">
        <div className="col-8">
          <section className="row promo">
            <div className="hFrameWrap auto-spread center">
              <h3>This Week's Specials!</h3>
              <button>
                Online Menu
              </button>
            </div>
          </section>
          <section className="row">
            <div className="hFrame flx-left sm-gap">
              {featureDishes.map(dish => {
                return <FeatureDish key={dish.key} dish={dish} />
              })}
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

export default Highlights
