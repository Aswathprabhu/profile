export default function Header() {
  return (
    <>
      <section className="w-1/2 h-full">
        <section className="mb-6">
          <h1 className="mb-3">Aswath Prabhu R</h1>
          <span className="font-semi-bold uppercase">Software Developer</span>
        </section>
        <section className="mb-6">
          <h2 className="uppercase mb-3">Profile Summary</h2>
          <span>
            Grounded and solution-oriented software engineer with a wide
            variety of professional experiences. Adept at motivating self and others.
            Passionate about efficiently developing and end-to-end testing web apps.
          </span>
        </section>
        <section className="mb-6">
          <h2 className="uppercase mb-3">TL;DR,</h2>
          <ul className="list-disc list-outside">
            <li>Javascript aficionado</li>
            <li>Focusing primarily on React.js, Ember.js and Web Components to build fintech products</li>
            <li>Wed Performance Enthusiast</li>
            <li>Love to contribute back to the community</li>
            <li>Developer with total professional experience of 5 Years 1 Months</li>
          </ul>
        </section>
      </section>
      <aside className="w-1/2 flex justify-end h-full">
        <img className="w-96 h-3/5 object-cover" src="/profile.jpg" alt="Aswath Prabhu R" />
      </aside>
    </>
  );
}