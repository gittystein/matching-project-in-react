import './Donate.css';
import { f } from "./ffData";

////////////////////////////////////////  תורם בודד  ////////////////////////////////////////

const Donate = (props) => {

   return (<>

      <div className="donte">
         <div> {props.donate.name}</div>
         <div> {props.donate.txt}</div>
         <div> {props.coin == "shekel" ? `${props.donate.sum} ₪` : `${((props.donate.sum) / props.exchangeRate).toFixed(0)} $`} </div>
         <div> {f(props.donate.date)} </div>
      </div>

   </>)
}

export default Donate;

