import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
      <div className="App m-100 flex-column align-items">
        <h2>login authentication App</h2>
        <h3>
          <Link to="/account/login">Click here</Link> to go to login page
        </h3>
      </div>
  );
}

export default App;
