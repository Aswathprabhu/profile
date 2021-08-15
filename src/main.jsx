import ProfExp from './prof-exp';
import Experiences from './experiences';

const WORK_GROUNDS = [
  {
    place: 'Member Technical Staff, Zoho Corporation',
    timeline: <span><ProfExp />,&nbsp;May 2019 - Present</span>,
    doings: [
      'Took care of Payment Gateways Integration module in Zoho Finance Suite',
      'Handled Client Integration of Stripe, Braintree, Razorpay, Square, forte, Authorize.Net and various gateways',
      'Adopted a module based workflow, that removed all the duplication thereby increasing the clarity and made the code more predictable'
    ]
  },
  {
    place: 'Project Trainee, Zoho Corporation',
    timeline: 'June 2018 - May 2019',
    doings: [
      'Got comfortable with Ember, a JavaScript based Client Framework',
      'Contributed to many internal tools that rapidly sped up the development workflow'
    ]
  }
]

export default function Main() {
  return (
    <div className="h-full text-green-200 flex w-full">
      <section className="w-1/2 mb-6">
        <h1 className="mb-6 uppercase">Work Background</h1>
        {
          WORK_GROUNDS.map((desc, index) => (
            <Experiences key={index} {...desc} />
          ))
        }
      </section>
      <section className="w-1/2 mb-6 ml-52">
        <h1 className="mb-6 uppercase">Skills</h1>
      </section>
    </div>
  )
}