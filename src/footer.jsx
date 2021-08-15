
import Experiences from "./experiences"

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
    <div className="h-full text-white flex w-full">
      <section className="w-1/2 mb-6">
        <h1 className="mb-6 text-yellow-100 uppercase">Education</h1>
        {
          EDU_HISTORY.map((desc, index) => (
            <Experiences key={index} {...desc} />
          ))
        }
      </section>
      <section className="w-1/2 mb-6 ml-52">
        <h1 className="mb-6 text-yellow-100 uppercase">Get In Touch</h1>
      </section>
    </div>
  )
}