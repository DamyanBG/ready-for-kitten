import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page/home-page';
import QuestionsPage from './components/questions/questions-page';
import ResultPage from './components/results/results-page';

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/questions" element={<QuestionsPage />} />
                        <Route path="/results" element={<ResultPage />} />
                    </Routes>
                </main>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
