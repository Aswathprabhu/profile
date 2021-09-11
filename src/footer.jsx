
import Experiences from "./experiences"
import Contact from './contact';
import styles from './styles/footer.module.css';

const EDU_HISTORY = [
  {
    place: 'Sri Krishna College of Technology',
    timeline: 'B.E. Computer Science, Aug 2015 - May 2019',
    doings: [
      'GPA 8.50',
      'During my time in college, I came to know the critical problems the computers were solving in the modern world',
      'I equipped myself with concepts that helped me to solve some critical problems related to computers both efficiently and smartly'
    ]
  },
  {
    place: 'Mahatma Montessori School',
    timeline: <span>Higher Secondary and Secondary Level, &nbsp; <br/>June 2000 - March 2015</span>,
    doings: [
      '94.1% Higher Secondary Certificate',
      '98.4% Secondary Level School Certificate'
    ]
  }
]

export default function Footer() {
  return (
    <div className="h-full text-white flex w-full flex-wrap slide-in justify-between">
      <section className="sm:w-1/2 mb-6">
        <h1 className="mb-6 text-yellow-100 uppercase mt-12 sm:mt-0">Education</h1>
        {
          EDU_HISTORY.map((desc, index) => (
            <Experiences key={index} {...desc} />
          ))
        }
      </section>
      <section className="w-112 mb-6 text-center sm:text-left">
        <h1 className="text-yellow-100 mb-6 uppercase">Get In Touch</h1>
        <Contact type="phone" className={styles['contact-item']} />
        <Contact type="mail" className={styles['contact-item']} />
        <Contact type="website" className={styles['contact-item']} />
        <br />
        <Contact type="twitter" className="inline-block mr-8 mt-6 mb-6 hover:scale-110 transition" />
        <Contact type="linkedin" className="inline-block mr-8 mb-6 hover:scale-110 transition" />
        <Contact type="github" className="inline-block mb-6 mr-8 hover:scale-110 transition" />
        <Contact type="stackoverflow" className="inline-block mb-6 hover:scale-110 transition" />
      </section>
    </div>
  )
}