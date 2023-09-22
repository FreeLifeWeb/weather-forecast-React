import React from 'react';

export function Weather({ data }) {
    return (
        <>
            {data?.name !== undefined && (
                <div className='weather'>
                    <div className='top'>
                        <div>
                            <p className='city'>{data?.name}</p>
                            <p className='weather-description'>
                                {data?.description}
                            </p>
                        </div>
                        <img
                            alt='weather'
                            className='weather-icon'
                            src={`./styles/icons/${data.icon}.png`}
                        />
                    </div>
                    <div className='bottom'>
                        <p className='temperature'>
                            {Math.round(data.temp) - 273}
                            °C
                        </p>
                        <div className='details'>
                            <div className='parameter-row'>
                                <span className='parameter-label'>
                                    description:
                                </span>
                            </div>
                            <div className='parameter-row'>
                                <span className='parameter-label'>
                                    Feels like
                                </span>
                                <span className='parameter-value'>
                                    {Math.round(data.feels_like) - 273}
                                    °C
                                </span>
                            </div>
                            <div className='parameter-row'>
                                <span className='parameter-label'>Clouds</span>
                                <span className='parameter-value'>
                                    {data.clouds}%
                                </span>
                            </div>
                            <div className='parameter-row'>
                                <span className='parameter-label'>Wind</span>
                                <span className='parameter-value'>
                                    {data.speed} m/s
                                </span>
                            </div>
                            <div className='parameter-row'>
                                <span className='parameter-label'>
                                    Humidity
                                </span>
                                <span className='parameter-value'>
                                    {data.humidity}%
                                </span>
                            </div>
                            <div className='parameter-row'>
                                <span className='parameter-label'>
                                    Pressure
                                </span>
                                <span className='parameter-value'>
                                    {data.pressure} hPa
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
