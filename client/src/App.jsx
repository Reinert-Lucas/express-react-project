import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Weather from './components/weather/WeatherView';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/weather" element={<Weather />} />
            </Routes>
        </>
    );
}

export default App