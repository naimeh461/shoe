
import { services } from '../../utilities/utilities'
import Card from './card'

function Service() {
  return (
    <section
    className='max-container flex justify-center flex-wrap gap-9 w-[80%] mx-auto'>
      {services.map((service) => (
        <Card key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Service