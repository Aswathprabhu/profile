import ProfExp from "./prof-exp";
import Experiences from "./experiences";

const WORK_GROUNDS = [
  {
    place: "Software Engineer, Fullstack - Chargebee Technologies",
    timeline: "November 2021 - Present",
    doings: [
      "Owning the Ecommerce module and was a key contributor to Chargebee's Shoify subscription app",
      "Worked closely with the product managers to understand the product requirements and contributed to them fullstack",
      "Owning the Partner Payments module in the Chargebee app's merchant UI",
      "Handled integrations of various gateways like Global payments, Bluesnap e.t.c on the frontend",
      "Contributed consistently from the backend and developed an analysis tool from scratch",
      "The internal tool developed helped the solutions team reduce their debugging time upto 75%",
      "The tool was built with JAVA, that powered the backend code along with restful APIs talking to the NextJS powered UI at the frontend",
    ],
  },
  {
    place: "Member Technical Staff - Zoho Corporation",
    timeline: "May 2019 - October 2021",
    doings: [
      "Handled the integration of various payment gateways like Stripe, Braintree, Razorpay, Square, forte and Authorize.Net e.t.c",
      "Adopted a module based workflow, that removed all the duplication thereby increasing the clarity and made the code more predictable",
      "Got a chance to build a DLS. Built it with web components and made it framework agnostic",
      "Concentrated a lot on performance. Made critical modules light weight and rendered them as iframes",
      "Had a good experience maintaining CI/CD for a monorepo",
    ],
  },
  {
    place: "Project Trainee - Zoho Corporation",
    timeline: "June 2018 - May 2019",
    doings: [
      "Got comfortable with the fundamentals of Web Development and Ember JS",
      "Started adding features to the products under Zoho Finance Suite",
    ],
  },
];

const SKILLS = [
  {
    type: "Fundamentals",
    values: [
      "JavaScript (ES6 and above)",
      "Typescript, Latest HTML and CSS",
      "JAVA (Intermediate)",
      "Node JS (Intermediate)",
    ],
  },
  {
    type: "JS Frameworks, Libraries and Compilers",
    values: ["Vue JS", "React JS and Preact JS", "Ember JS", "Stencil JS"],
  },
  {
    type: "CSS Libraries and Preprocessors",
    values: ["SASS", "LESS", "TailwindCSS", "Bootstrap"],
  },
  {
    type: "Testing Frameworks and Libraries",
    values: [
      "Testing Library (Vue, React and Preact",
      "Vue Test Utils",
      "JEST",
      "Ember Qunit",
    ],
  },
  {
    type: "Web Components",
    values: [
      "Building UI components as Web Components",
      "Maintained a Design Language System",
    ],
  },
  {
    type: "Codemods",
    values: [
      "Experience in writing codemods and custom eslint rules with jscodeshift",
    ],
  },
  {
    type: "CI/CD",
    values: [
      "Experience in maintaining CI/CD for a Monorepo",
      "Wrote a custom CI/CD workflow that ensured effective integration and deployment",
    ],
  },
  // {
  //   type: 'Other Technical Skills',
  //   values: ['Web Performance, Web Assembly, Web Workers and Service Worker and PWA' ]
  // }
];

export default function Main() {
  return (
    <div className="h-full text-green-200 flex w-full slide-in justify-between flex-wrap">
      <section className="sm:w-1/2 mb-6">
        <h1 className="mb-6 uppercase mt-12 sm:mt-0">Work Background</h1>
        {WORK_GROUNDS.map((desc, index) => (
          <Experiences key={index} {...desc} />
        ))}
      </section>
      <section className="w-112 mb-6">
        <h1 className="mb-6 uppercase">Skills</h1>
        {SKILLS.map(({ type, values }, index) => {
          return (
            <div className="mb-6" key={index}>
              <h3 className="mb-4 uppercase">{type}</h3>
              <ul className="list-disc ml-5">
                {values.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}
