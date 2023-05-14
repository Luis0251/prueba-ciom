import './App.css';
import {Header} from './Components/Header'
import { Appoitments } from './Components/pages/Appointments';
function App() {
  const company = {
    name: 'Todo List',
  };

  return (
    <>
      <Header company={company}/>
      <main className="py-3">
        <Appoitments />
      </main>
    </>
  );
}

export default App;
