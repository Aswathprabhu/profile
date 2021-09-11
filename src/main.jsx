import ProfExp from './prof-exp';
import Experiences from './experiences';

const WORK_GROUNDS = [
  {
    place: 'Member Technical Staff, Zoho Corporation',
    timeline: <span><ProfExp />,&nbsp;May 2019 - Present</span>,
    doings: [
      'Maintaining the Payment Gateways Integration module in Zoho Finance Suite',
      'Handled Client Integration of Stripe, Braintree, Razorpay, Square, forte, Authorize.Net and various gateways',
      'Adopted a module based workflow, that removed all the duplication thereby increasing the clarity and made the code more predictable',
      'Maintaining a Design Language System built with Web Components',
      'Built UI components as Web Components to make them interoperable between various frameworks and libraries',
      'Made critical pages light weight and rendered them as iframes and handled the cross-origin communication via message events',
      'Wrote various codemods and custom lint rules to enforce code styles',
      'Maintaining CI/CD for a Monorepo',
      'Built an API development tool that automatically syncs collection and saved hours of development for backend devs',
      'Contributed to various internal build tools'
    ]
  },
  {
    place: 'Project Trainee, Zoho Corporation',
    timeline: 'June 2018 - May 2019',
    doings: [
      'Got comfortable with the fundamentals of Web Development',
      'Played with Ember JS',
      'Started adding features to the products under Zoho Finance Suite',
      'Contributed to many internal tools that rapidly sped up the development workflow'
    ]
  }
]

const SKILLS = [
  {
    type: 'Fundamentals',
    values: ['Latest HTML and CSS', 'JavaScript (ES6 and above)', 'Node JS (Intermediate)']
  },
  {
    type: 'JS Frameworks, Libraries and Compilers',
    values: ['Ember JS', 'React JS and Preact JS', 'Stencil JS']
  },
  {
    type: 'CSS Libraries and Preprocessors',
    values: ['SASS', 'LESS', 'TailwindCSS', 'Bootstrap']
  },
  {
    type: 'Testing Frameworks and Libraries',
    values: ['Ember Qunit', 'Preact Testing Library (Intermediate)', 'JEST (Intermediate)']
  },
  {
    type: 'Web Components',
    values: ['Building UI components as Web Components', 'Maintaining a Design Language System']
  },
  {
    type: 'Codemods',
    values: ['Experience in writing codemods and custom eslint rules with jscodeshift']
  },
  {
    type: 'CI/CD',
    values: ['Experience in maintaining CI/CD for a Monorepo', 'Wrote a custom deployment script']
  }
  // {
  //   type: 'Other Technical Skills',
  //   values: ['Web Performance, Web Assembly, Web Workers and Service Worker and PWA' ]
  // }
]

export default function Main() {
  return (
    <div className="h-full text-green-200 flex w-full slide-in justify-between flex-wrap">
      <section className="sm:w-1/2 mb-6">
        <h1 className="mb-6 uppercase mt-12 sm:mt-0">Work Background</h1>
        {
          WORK_GROUNDS.map((desc, index) => (
            <Experiences key={index} {...desc} />
          ))
        }
      </section>
      <section className="w-112 mb-6">
        <h1 className="mb-6 uppercase">Skills</h1>
        {
          SKILLS.map(({ type, values }, index) => {
            return (
              <div className="mb-6" key={index}>
                <h3 className="mb-4 uppercase">{type}</h3>
                <ul className="list-disc ml-5">
                  {
                    values.map((item) => (
                      <li>{item}</li>
                    ))
                  }
                </ul>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}