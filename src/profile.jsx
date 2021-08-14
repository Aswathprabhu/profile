import { render } from 'preact';
import Header from './header';
import Main from './main';
import Footer from './footer';
import InvertedTriangle from './inverted-triangle';
import './styles/index.css';

function Profile() {
  return (
    <main className="wrapper h-full">
      <article className="flex flex-col h-full leading-8">
        <section className="bg-green-200">
          <div className="flex justify-between min-h-1/2 h-full m-auto pt-8 w-2/3">
            <Header />
          </div>
        </section>
        <InvertedTriangle className="border-t-green-200 absolute" />
        <section className="bg-yellow-100">
          <div className="flex justify-between min-h-1/2 h-full m-auto pt-8 w-3/5">
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
