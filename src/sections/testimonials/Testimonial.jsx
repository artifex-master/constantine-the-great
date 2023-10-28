import Card from '../../components/Card'

const Testimonial = ({testimonial}) => {
  return (
    <div>
      <Card className="light">
        <p>{testimonial.quote}</p>
        <div className="testimonial__client">
          <div className="testimonial__client-avatar">
            <img src={testimonial.avatar} alt="Testimonial Avatar" />
          </div>
          <div className="testimonial__client-details">
            <h6>{testimonial.name}</h6>
            <small>
              {testimonial.profession}
            </small>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Testimonial