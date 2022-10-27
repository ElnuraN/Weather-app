import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="body">
        <div className="weather">
            <div className="top">
                <div>
                <div>
                    <p className="city">Riga</p>
                    <p className="weather-description">Sunny</p>
                </div>
                    <img alt="" className="weather-icon" src="https://img.icons8.com/emoji/2x/sun-emoji.png"/>
                    <p className="weather-day">Monday, May 15th</p>
                </div> 
            </div>
            <div className="bottom">
                <p className="temperature">22°</p>
                    <div className="parameter-row">
                        <span className="parameter-label">16° / 27°</span>
                    </div>
                </div>
            </div>
         </div>
    ) ;
}

export default CurrentWeather;