// import logo from './logo.svg';
import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Dragdrop from './components/dragdrop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Dragdrop />
      </div>
    </DndProvider>
  );
}

export default App;
