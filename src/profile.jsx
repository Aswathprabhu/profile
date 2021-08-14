import { render } from 'preact';
import Header from './header';
import Main from './main';
import Footer from './footer';
import InvertedTriangle from './inverted-triangle';
import styles from './styles/profile.module.css';
import './styles/index.css';

function Profile() {
  return (
    <main className="wrapper h-full">
      <article className="flex flex-col h-full leading-8">
        <section className="bg-green-200">
          <div className={`${styles['section-setup']}`}>
            <Header />
          </div>
        </section>
        <InvertedTriangle className="border-t-green-200 absolute" />
        <section className="bg-yellow-100">
          <div className={`${styles['section-setup']}`}>
            <Main />
          </div>
        </section>
        <section className="bg-green-200">
          <Footer />
        </section>
      </article>
    </main>
  )
}

render(<Profile />, document.getElementById('app'));
