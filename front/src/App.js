import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import HomePage from "./component/HomePage";

function RedirectToHome() {
    return <Navigate to="/" />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/homepage" element={<RedirectToHome />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
