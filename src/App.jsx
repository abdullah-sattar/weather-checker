import './App.scss';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Form from './components/Form/Form';
import History from './components/History/History';

const App = () => {
  return (
    <div className="App">
      <Form />
      <CurrentWeather />
      <History />
    </div>
  );
}

export default App;
