import './App.css';
import { Container, Button, Paper, TextField, Box, Typography, InputAdornment } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    width: "100vw",
    height: "100vh",
    paddingTop: theme.spacing(5),

  },
}));
function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper component={Box} width="30%" mx="auto" p={4}>
        <Typography variant="h5">Create New Account</Typography>
        <Box component="form">
          <TextField
            fullWidth
            placeholder="Enter Your First Name"
            margin="normal"
            variant="outlined"
            color="secondary"
            // label="First Name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            placeholder="Enter Your Last Name"
            margin="normal"
            variant="outlined"
            color="secondary"
            label="Last Name"
          />

          <TextField
            fullWidth
            placeholder="Enter Your Message"
            margin="normal"
            variant="outlined"
            color="secondary"
            label="Your Message"
            multiline
            rows={4}
          />

        </Box>
        <Box>
          <Button variant="contained" color="secondary">Signup</Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
