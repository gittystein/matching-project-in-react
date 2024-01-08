import './Matching.css';
import { useState, useEffect } from "react";
import Badge from '@mui/material/Badge';
import PaymentIcon from '@mui/icons-material/Payment';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

////////////////////////////////////////  דף ראשי ///////////////////////////////

const Matcing = (props) => {

    let [sum, setSum] = useState(0);
    let [cntTormim, setCntTormim] = useState(0);

    const f1 = () => {
        let totalSum = 0;
        let totalCount = 0;
        let x = props.arr.length;

        for (let i = 0; i < x; i++) {
            totalSum += props.arr[i].sum;
            totalCount++;
        }

        setSum(totalSum);
        setCntTormim(totalCount);
    };

    useEffect(() => { f1() }, [props.arr]);

    return (<>

        <div className="container" >
            <div className="goal">
                <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="goal"></img>

                <div style={{ paddingLeft: '50%', paddingBottom: '5%' }}>
                    <Badge badgeContent={cntTormim} color="primary">
                        <PaymentIcon color="action" />
                    </Badge>
                </div>

                <Box sx={{ width: 300, marginLeft: 5 }}>
                    <Slider
                        value={((sum * 100) / 125000).toFixed(1)}
                        valueLabelDisplay="on"
                    />
                </Box>

                <h1>{props.coin === "shekel" ? `${sum} ₪` : `${(125000 / props.exchangeRate).toFixed(0)} $`} :סך כל התרומות </h1>
                <h4>מתוך יעד של {props.coin === "shekel" ? ` 125000 ₪ ` : `${(125000 / props.exchangeRate).toFixed(0)} $`}</h4>

            </div>

            <div className="matcingImage">
                <img src="https://charityex.blob.core.windows.net/ybh/ybh/uploads/5828972b-f783-49dc-b81c-a478f4222fa0.gif" alt="campain pictour"></img>
            </div>

        </div>

    </>)
}

export default Matcing;