import Title from "./components/Title";
import Form from "./components/Form"
import Results from "./components/Results"
//useStateのインポート, ステートフックを使う為に必要
import { useState } from "react"
import axios from "axios";
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "city"
  //stateの唯一の引数は初期値
  //現在のstateをそれを更新する関数を返す
  //分割代入構文
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });
  const getWeather = (e) => {
    //既定のアクションを通常どおりに行うべきではないことを伝える
    e.preventDefault();
    axios.get("https://api.weatherapi.com/v1/current.json?key=232a65be778b48a5915103113210705&q=London&aqi=no")
      //setResultsでresultsのstateを更新する
      .then(res => setResults({
        country: res.data.location.country,
        cityName: res.data.location.cityName,
        temperature: res.data.current.temp_c,
        conditionText: res.data.current.condition.text,
        icon: res.data.current.condition.icon
      }))
  }
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Results results={results} />
    </div>
  );
}

export default App;
