import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const Login = () => {
    const [login,setLogin] = useState('')
    return(
        <Grid item xs={12}>
        <FormControl fullWidth>
          <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
          <CardActions>
            <Button variant="contained">
          <FormHelperText sx={{color:'white'}} id="login_nome_helper_text">Login.</FormHelperText> 
            </Button>
          </CardActions>
        </FormControl>
      </Grid>
    )
}

export default Login;