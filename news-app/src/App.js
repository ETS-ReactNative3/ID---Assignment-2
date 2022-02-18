
import './App.css';
import NewsList from './components/NewsList';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="un__response">
        <iframe className="un__vid"
          width="560" height="315" 
          src="https://www.youtube.com/embed/Irxikwio1Mo" title="YouTube video player" 
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>

        <div>
          <h1>UN Response to COVID-19</h1>
          <p>
            The COVID-19 pandemic is more than a health crisis; it is an economic crisis,
            a humanitarian crisis, a security crisis, and a human rights crisis. This crisis 
            has highlighted severe fragilities and inequalities within and among nations. 
            Coming out of this crisis will require a whole-of-society, whole-of-government 
            and whole-of-the-world approach driven by compassion and solidarity.
          </p>
        </div>
      </div>
      
      <div className="who__measures">
        <div>
          <h1>WHO: Coronavirus disease (COVID-19) Pandemic, precautionary measures</h1>
          <p>
            The World Health Organization (WHO) is working closely with global experts, 
            governments and partners to rapidly expand scientific knowledge on this new virus, 
            to track the spread and virulence of the virus, and to provide advice to countries and 
            individuals on measures to protect health and prevent the spread of this outbreak.
          </p>
        </div>

        <iframe className="who__vid"
          width="560" height="315" 
          src="https://www.youtube.com/embed/bPITHEiFWLc" 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>        
      </div>
      
      <h1 className="news__headline">Global headlines about coronavirus</h1>
      <NewsList/>
      {/*Here we call the News List, which pass in the props(parameter) to the NewsItem as data, to be filtered and designed as a newsItem for each article which call the func*/}

      <Footer />
    </div>
  );
}

export default App;
