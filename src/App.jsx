import Atropos from 'atropos';
import './App.css';
import MyRouters from './routers/MyRouters';

function App() {
  return (
<>
<MyRouters/>
<div id="app">
      {/* Atropos */}
      <Atropos className="my-atropos">
        {/* ... */}
      </Atropos>
    </div>
</>
  );
}

export default App;
