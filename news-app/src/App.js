
import './App.css';
import NewsList from './components/NewsList';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />

      <NewsList/>
      {/*Here we call the News List, which pass in the props(parameter) to the NewsItem as data, to be filtered and designed as a newsItem for each article which call the func*/}

      <Footer />
    </div>
  );
}

export default App;
