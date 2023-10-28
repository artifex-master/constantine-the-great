import {useEffect} from 'react'
import contacts from './data'
import './contacts.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contacts = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  })    
  return (
    <section id="contacts">
      <h2>Get in touch</h2>
      <p>
        Shoot me a message via any of the links below!
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contacts