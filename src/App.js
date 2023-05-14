import './App.css';
import {Header} from './Components/Header'
function App() {
  const company = {
    name: 'Todo List',
  };

  return (
    <>
      <Header company={company}/>
    </>
  );
}

export default App;
