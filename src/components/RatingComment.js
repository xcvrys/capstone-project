const RatingComment = (props) => {

  const { avatar, name, rating, goldStar, greyStar, quote } = props.testimony

  const maxRating = 5

  const Star = (props) => {
    return <img src={ (props.num + 1) <= rating ? goldStar : greyStar } alt="star" />
  }

  return (
    <article className="quote">
      <section className="hFrame auto-space center">
        <img
          src={ avatar }
          alt="profile"
          className="avatar"></img>
        <div className="name">{ name }</div>
      </section>
      <section className="rating">
        {(() => {
          let items = []
          for (let x = 0; x < maxRating; x++) {
            items.push(<Star num={x} key={ `star${x}` } />)
          }
          return items
        })()}
        <p>{ quote }</p>
      </section>
    </article>
  )
}

export default RatingComment
