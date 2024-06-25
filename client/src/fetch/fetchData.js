const API_KEY = '754752838e0d460f46af446d5afeb733';
export async function fetchData(cityName) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error(
                `Ошибка при выполнении запроса: ${response.statusText}`
            );
        }

        const data = await response.json();

        // Если в данных отсутствует информация о погоде, считаем, что город не найден
        if (!data.weather || data.weather.length === 0) {
            throw new Error('Город не найден');
        }

        return data;
    } catch (error) {
        throw error;
    }
}
