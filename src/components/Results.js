//propsでデータをApp.jsから受け取る
const Result = ({ results }) => {
    const { country, cityName, temperature, conditionText, icon } = results
    return (
        <div>
            {/* 短絡評価の為、左辺がfalseの場合は右辺は実行されない */}
            { country && <div className="results-city">{country}</div>}
            { cityName && <div className="results-country">{cityName}</div>}
            { temperature && <div className="results-temp">{temperature}</div>}
            { conditionText &&
                <div className="results-condition">
                    <img src={icon} alt="icon"></img>
                    <span>{conditionText}</span>
                </div>}
        </div>
    );
}

export default Result;