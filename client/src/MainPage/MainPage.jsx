import React, { useState } from 'react';
import { Weather } from '../Weather/Weather';
import { fetchData } from '../fetch/fetchData';

export function MainPage() {
    const [input, setInput] = useState('');
    const [data, setData] = useState({});
    const [err, setErr] = useState('');

    const clickHandler = async (e) => {
        if (e.key === 'Enter') {
            try {
                const result = await fetchData(input);

                setData({
                    description: result.weather[0].description,
                    temp: result.main.temp,
                    clouds: result.clouds.all,
                    feels_like: result.main.feels_like,
                    humidity: result.main.humidity,
                    speed: result.wind.speed,
                    pressure: result.main.pressure,
                    country: result.sys.country,
                    name: result.name,
                    icon: result.weather[0].icon,
                });

                setErr('');
                setInput('');
            } catch (error) {
                console.error(error);

                if (error.message === 'Город не найден') {
                    setErr('Город не найден!');
                } else {
                    setErr('Произошла ошибка при запросе');
                    setInput('');
                }
            }
        }
    };

    return (
        <div className='search'>
            <div className='inp'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={clickHandler}
                    placeholder='enter city...'
                    type='text'
                />
            </div>
            <div className='container'>
                {err ? <p className='err'>{err}</p> : <Weather data={data} />}
            </div>
        </div>
    );
}
