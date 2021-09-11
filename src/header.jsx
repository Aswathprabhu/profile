import ProfExp from './prof-exp';
import Contact from './contact';
import styles from './styles/header.module.css';

export default function Header() {
  return (
    <div className="flex justify-between slide-in">
      <section className="w-1/2 h-full text-white">
        <section className="mb-6 uppercase">
          <h1 className="text-yellow-100">Aswath Prabhu R</h1>
          <span className="font-bold">Software Developer</span>
        </section>
        <section className="mb-6">
          <h2 className="uppercase mb-3 text-yellow-100">Profile Summary</h2>
          <span>
            Grounded and solution-oriented software engineer with a wide
            variety of professional experiences. Adept at motivating self and others.
            Passionate about efficiently developing and end-to-end testing web apps.
          </span>
        </section>
        <section>
          <h2 className="uppercase mb-3 text-yellow-100">TL;DR,</h2>
          <ul className="list-disc ml-5">
            <li>Javascript aficionado</li>
            <li>Focusing primarily on React.js, Ember.js and Web Components to build fintech products</li>
            <li>Wed Performance Enthusiast</li>
            <li>Love to contribute back to the community</li>
            <li>
              Total professional experience of&nbsp;
              <ProfExp className="font-bold" />
            </li>
          </ul>
        </section>
      </section>
      <aside className="h-full">
        <img
          className="w-96 h-3/5 object-cover rounded-lg shadow-2xl profile-img"
          src="/profile.jpg"
          alt="Aswath Prabhu R"
        />
        <div className="relative top-9">
          <Contact type="phone" className={styles['contact-item']} />
          <Contact type="mail" className={`${styles['contact-item']} top-9`} />
          <Contact type="website" className={`${styles['contact-item']} top-18`} />
        </div>
        
        {/* <Contact type="website" className="inline-block ml-3" /> */}
        {/* <Contact type="linkedin" className="inline-block ml-3" />
        <Contact type="stackoverflow" className="inline-block" />
        <Contact type="github" className="inline-block ml-3" />
        <Contact type="twitter" className="inline-block ml-3" /> */}
      </aside>
    </div>
  );
}