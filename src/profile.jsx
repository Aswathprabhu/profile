import { render } from 'preact';
import Header from './header';
import Main from './main';
import Footer from './footer';
import './styles/index.css';

function Profile() {
  return (
    <div className="wrapper h-full">
      <div className="flex flex-col m-auto py-8 w-3/5 h-full">
        <header className="flex justify-between min-h-1/2">
          <Header />
        </header>
        <main className="">
          <Main />
        </main>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

render(<Profile />, document.getElementById('app'));
