import './App.css';
import NavBar from "./NavBar";
import Matching from "./Matching";
import { Route, Routes } from 'react-router-dom';
import DonateList from './DonateList';
import DonateForm from './DonateForm';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ColorModeContext } from './Context'
import { blue, green, orange, yellow } from "@mui/material/colors";
import axios from 'axios';

function App() {
  const [dolar, setDolar] = useState();

  let [arr, setArr] = useState([
    { name: "sara", txt: "אני שמח לתרום לך ידיד", sum: 1500, date: new Date(2023, 11, 11) },
    { name: "shira", txt: "מכל הלב האובה", sum: 300, date: new Date(2023, 11, 11) },
    { name: "chana", txt: "ביחד ננצח", sum: 550, date: new Date(2023, 11, 11) },
    { name: "chana", txt: "ביחד ננצח", sum: 550, date: new Date(2023, 11, 11) }]);

  //מטבע
  let [coin, setCoin] = useState("shekel");
  function changeCoin() {
    setCoin(coin === "shekel" ? "dollar" : "shekel");
  }
  //סוף מטבע 

  //שער הדולר
  const [exchangeRate, setExchangeRate] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExchangeRate = async () => {
      const apiKey = '97411957d4835f627a4cc0ca';
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${apiKey}/pair/USD/ILS`
        );
        const exchangeRate = response.data.conversion_rate;
        setExchangeRate(exchangeRate);
        setLoading(false);
      }
      catch (error) {
        setExchangeRate(3.8)
        console.error('Error fetching exchange rate:', error.message);
        setLoading(false);
      }
    };
    fetchExchangeRate();
  }, []);
  //סוף שער הדולר


  //החלפת רקע
  const [mode, setMode] = React.useState('light');

  const themeDark = createTheme({
    palette: {
      primary: orange,
      secondary: green,
      common: blue
    }
  })

  const themeLight = createTheme({
    palette: {
      common: blue,
      primary: blue,
      secondary: yellow,
      common: blue

    }
  })

  const colorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      return newMode;
    });
  }
  //סיום החלפת רקע

  return (<>

    <send />
    <ColorModeContext.Provider value={{ colorMode, status: mode }}>
      <ThemeProvider theme={mode == "dark" ? themeDark : themeLight}>

        <NavBar arr={arr} changeCoin={changeCoin} setDolar={setDolar} dolar={dolar} />
        <Matching arr={arr} coin={coin} exchangeRate={exchangeRate} />

        <Routes>
          <Route path='donateList' element={<DonateList arr={arr} coin={coin} exchangeRate={exchangeRate} />} />
          <Route path='donateForm' element={<DonateForm arr={arr} setArr={setArr} coin={coin} exchangeRate={exchangeRate} />} />
          <Route path='' />
        </Routes>

      </ThemeProvider>
    </ColorModeContext.Provider >

  </>);
}

export default App;
