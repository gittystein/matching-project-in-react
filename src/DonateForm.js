import './DonateForm.css';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { useTheme, ThemeProvider } from '@mui/material/styles';

////////////////////////////////////////   טופס תרומה  ///////////////////////////////

let donateSchema = yup.object().shape({
    name: yup.string(),
    sum: yup.number().nullable().transform(val => isNaN(val) ? undefined : val).typeError("יכול להיות רק מספר").required("שדה חובה").min(1),
    massege: yup.string(),
})

const DonateForm = (props) => {
    let navigate = useNavigate();
    let { register, handleSubmit, reset, formState: { dirtyFields, errors } } = useForm({
        defaultValues: { name: "אנונימי", date: Date.now() },
        resolver: yupResolver(donateSchema)
    });

    const saveDetails = (data) => {
        data.date = new Date();
        props.setArr([...props.arr, data]);
        alert("פרטייך נשמרו בהצלחה, תודה על תרומתך תזכה למצוות");
        navigate("/donateList")
    }

    const [dolar, setDolar] = useState(1);
    let theme = useTheme();

    return (<>

        <form onSubmit={handleSubmit(saveDetails)}>

            <h2 style={{ padding: '5%' }}>-------------------טופס תרומה-------------------</h2>

            <Box
                sx={{
                    display: '-ms-inline-grid',
                    gap: 2,
                    gridTemplateColumns: { sm: '1fr 1fr 1fr' },
                    gap: 2,
                    color: "black",
                    margin: "50px",

                }}
            >
                <TextField label="שם" sx={{ ml: 3, color: theme.palette.text.common }} {...register("name")} />

                <TextField label="סכום" sx={{ ml: 3 }}  {...register("sum", { required: true, minLength: 1 })}
                    error={errors.sum ? true : false} helperText={errors.sum ? "סכום הוא שדה חובה" : ""} />

                <TextField label="הקדשה" sx={{ ml: 3 }} {...register("txt")} />

            </Box>

            <ListItemButton style={{ marginBottom: '5%' }} component="button" type="submit">
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary="שלח תרומה" />
            </ListItemButton>

        </form >

    </>)
}


export default DonateForm;

















