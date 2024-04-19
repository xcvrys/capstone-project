const Step = (props) => {

  const steps = [1, 2, 3]

  return (
    <article>
      <div className="row justify-content-center">
        <div className="col-7">
          <div className="hFrame auto-spread">
            {steps.map((step, index) => {
              return ((index + 1) < steps.length) ? (
                <div key={ index } className="hFrame auto-spread center">
                  <span
                    className="circle"
                    style={{ backgroundColor: (index + 1) <= props.step ? '#F4CE14': '#EDEFEE' }}
                    >{step}</span>
                  <span
                    className="stepconnector"
                    ></span>
                </div>
              )
              : (
                <span
                  key={index}
                  className="circle"
                  style={{backgroundColor: (index + 1) <= props.step ? '#F4CE14': '#EDEFEE'}}
                  >{step}</span>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Step
