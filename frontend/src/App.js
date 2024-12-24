import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AppHeader from './components/header';
import AppHero from './components/hero';
import AppAbout from './components/about';
import AppUpcoming from './components/upcoming';
import AppDonate from './components/donate';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import AppChat from './components/chat'

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppUpcoming />
        <AppDonate />
	<AppChat />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
