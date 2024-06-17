import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './App.css';
import Header from './components/Header';
// import Body from './components/Body'
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage'


function App() {
  //  // Wrap multiple elements into a single variable
  //  const appElements = (
  //   <div>
  //     {/* <Header /> */}
  //     <NotesListPage />
  //   </div>
  // );
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
          <Header/>
          <Routes>
            <Route path='/' exact element={<NotesListPage/>}/>
            <Route path="/note/:id" element={<NotePage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
