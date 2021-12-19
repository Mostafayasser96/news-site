import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Sidebar from './sidebar';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
        <Sidebar />
    </div>
  );
}

export default App;
