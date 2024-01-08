import './DonateList.css';
import Donate from "./Donate";
import React, { useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';

////////////////////////////////////////   רשימת תורמים - מתוך תורם בודד  //////////////////////////////

const DonateList = (props) => {

  const [search, setSearch] = useState('');
  const [sortByPrice, setSortByPrice] = useState();
  const [dolar, setDolar] = useState();


  let filter = props.arr.filter(item =>
    item.name.startsWith(search) ||
    item.txt.startsWith(search)
  ).sort((a, b) => { return sortByPrice == 1 ? a.sum > b.sum ? 1 : -1 : a.sum > b.sum ? -1 : 1 });

  return (<>

    <div style={{ display: 'flex', paddingLeft: '20%', textAlign: 'center' }}>

      <TextField className="in" label="חפש תרומה לפי שם/הקדשה" variant="standard" onChange={(e) => setSearch(e.target.value)} />

      <p className="pin">מיין לפי</p>
      <IconButton sx={{ ml: 1 }} onClick={() => sortByPrice === 1 ? setSortByPrice(0) : setSortByPrice(1)}>
        {sortByPrice === 1 ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </IconButton>

    </div>

    <div style={{ paddingLeft: '10%', display: 'flex', flexWrap: 'wrap' }}>
      {filter.map((filteredItem, index) => {
        return <Donate key={index} donate={filteredItem} coin={props.coin} exchangeRate={props.exchangeRate} />;
      })}
    </div>

  </>)
}

export default DonateList;