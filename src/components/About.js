import LemonSign from './nav/LemonSign'

const About = () => {
  return (
    <section id="about">
      <div className="row justify-content-center">
        <div className="col-8">
            <div className="hFrameWrap space-between center">
              <LemonSign />
              <div id="gallery">
                <img
                  id="top"
                  src={require('../assets/Mario and Adrian A.jpg')}
                  alt="Mario and Adrian1"></img>
                <img
                  id='bottom'
                  src={require('../assets/Mario and Adrian b.jpg')}
                  alt="Mario and Adrian2"></img>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
