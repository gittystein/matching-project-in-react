import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ColorModeContext = React.createContext();

const ToggleColorMode = () => {

  let theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);

  return (<>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        p: 3,
      }}>

      <Tooltip title={`עבור למצב ${colorMode.status == "dark" ? "בהיר" : "כהה"}`} >
        <IconButton sx={{ ml: 1 }} onClick={colorMode.colorMode} color="inherit">
          {colorMode.status === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Tooltip>

    </Box>

  </>);
}
export default ToggleColorMode;
