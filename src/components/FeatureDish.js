const FeatureDish = (props) => {

  const { heroImagePath, title, price, description, iconPath } = props.dish

  return (
    <article>
      <div className="scard">
        <section className="hero">
          <img
            src={ heroImagePath }
            alt="greek salad" />
        </section>
        <section className="content">
          <div className="hFrame auto-space center">
            <h4 className="title">{ title }</h4>
            <div className="price">{ price }</div>
          </div>
          <p>{ description }</p>
          <div className="hFrame auto-space">
            <div className="highlight">Order a Delivery</div>
            <img
              className="icon"
              src={ iconPath }
              alt="bicycle" />
          </div>
        </section>
      </div>
    </article>
  )
}

export default FeatureDish
