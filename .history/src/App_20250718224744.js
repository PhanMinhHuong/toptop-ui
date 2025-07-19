import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Following from './pages/Following';

function App() {
    return (
        <Router>
            <div className="App">
                <h1>hello</h1>;<Route path="/" element={<Home />}></Route>
                <Route path="/" element={<Following />}></Route>
            </div>
        </Router>
    );
}

export default App;
