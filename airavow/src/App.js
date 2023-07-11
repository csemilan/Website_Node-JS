import './App.css';
import ContactUs from './home-page/ContactUs';
import MainContainer from './home-page/MainContainer';
import Banner from './ui-components/banner/Banner';
import Footer from './ui-components/footer/Footer';
import Header from './ui-components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <MainContainer/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
