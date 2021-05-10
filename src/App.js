import Form from "./components/Form"
import Loading from "./components/Loading"
//useStateのインポート, ステートフックを使う為に必要
import { useState } from "react"
import axios from "axios";
import './App.css';
import Weather from "./components/Weather"

function App() {
  // Declare a new state variable, which we'll call "city"
  //stateの唯一の引数は初期値
  //現在のstateをそれを更新する関数を返す
  //分割代入構文
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    humidity: "",
    localtime: "",
    icon: ""
  });
  const getWeather = (e) => {
    //既定のアクションを通常どおりに行うべきではないことを伝える
    e.preventDefault();
    setLoading(true);
    //テンプレートリテラルで組み込み式を扱うことができる。バッククオート(``)で囲む。
    axios.get(`https://api.weatherapi.com/v1/current.json?key=232a65be778b48a5915103113210705&q=${city}&aqi=no`)
      //setResultsでresultsのstateを更新する
      .then(res => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon,
          humidity: res.data.current.humidity,
          localtime: res.data.location.localtime,
        })
        setCity("");
        setLoading(false);
      })
      .catch(err => alert(err));
  }
  return (
    <div className="wrapper">
      <div className="container">
        <div className="min-h-screen flex justify-center items-center">
          <Form setCity={setCity} city={city} getWeather={getWeather} />
          {loading ? <Loading /> : <Weather results={results} />}
        </div>
      </div>
    </div >
  );
}

export default App;
