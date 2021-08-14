import ProfExp from './prof-exp';

const WORK_GROUNDS = [
  {
    position: 'Member Technical Staff, Zoho Corporation',
    timeline: <span><ProfExp />,&nbsp;May 2019 - Present</span>,
    achievements: [
      'Took care of Payment Gateways Integration module in Zoho Finance Suite',
      'Handled Client Integration of Stripe, Braintree, Razorpay, Square, forte, Authorize.Net and various gateways',
      'Adopted a module based workflow, that removed all the duplication thereby increasing the clarity and made the code more predictable'
    ]
  },
  {
    position: 'Project Trainee, Zoho Corporation',
    timeline: 'June 2018 - May 2019',
    achievements: [
      'Got comfortable with Ember, a JavaScript based Client Framework',
      'Contributed to many internal tools that rapidly sped up the development workflow'
    ]
  }
]

function WorkGroundTemplate(props) {
  let { position, timeline, achievements } = props;
  return (
    <div className="mb-6">
      <h3 className="mb-1 uppercase">{position}</h3>
      <h4 className="mb-4 italic">
        ({timeline})
      </h4>
      <ul className="list-disc ml-5">
        {
          achievements.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default function Main() {
  return (
    <>
      <section className="w-1/2 h-full text-green-200">
        <section className="my-6">
          <h1 className="mb-6 uppercase">Work Background</h1>
          {
            WORK_GROUNDS.map((desc) => (
              <WorkGroundTemplate {...desc} />
            ))
          }
        </section>
      </section>
    </>
  )
}