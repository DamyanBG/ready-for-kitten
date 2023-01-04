import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page/home-page';
import QuestionsPage from './components/questions/questions-page';
import ResultPage from './components/results/results-page';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/ready-for-kitten" element={<HomePage />} />
                        <Route path="/ready-for-kitten/questions" element={<QuestionsPage />} />
                        <Route path="/ready-for-kitten/results" element={<ResultPage />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
