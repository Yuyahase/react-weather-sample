import Title from "./components/Title";
import Form from "./components/Form"
import Results from "./components/Results"
import Loading from "./components/Loading"
//useStateのインポート, ステートフックを使う為に必要
import { useState } from "react"
import axios from "axios";
import './App.css';

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
          icon: res.data.current.condition.icon
        })
        setCity("");
        setLoading(false);
      })
      .catch(err => alert(err));
  }
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} city={city} getWeather={getWeather} />
        {/* データを渡す */}
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div >
  );
}

export default App;
