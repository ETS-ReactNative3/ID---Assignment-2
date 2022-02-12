
import './App.css';
import NewsList from './components/NewsList';

function App() {
  return (
    <div className="App">
        <NewsList/>
        {/*Here we call the News List, which pass in the props(parameter) to the NewsItem as data, to be filtered and designed as a newsItem for each article which call the func*/}
    </div>
  );
}

export default App;
