import React from "react";
import logo from './logo.svg';
import './App.css';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import {makeStyles, ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {green, orange} from "@material-ui/core/colors";

import "fontsource-roboto";

function App() {
    return (
        <ThemeProvider theme={myTheme}>
            <Container maxWidth="xs">
                <div className="App">
                    <header className="App-header">
                        <AppBar color="secondary">
                            <Toolbar>
                                <IconButton>
                                    <MenuIcon/>
                                </IconButton>
                                <Typography variant="h6">
                                    MUI Themeing
                                </Typography>
                                <Button>
                                    Login
                                </Button>
                            </Toolbar>
                        </AppBar>
                        <Typography variant="h2" component="div">Welcome to Material-UI</Typography>
                        <Typography variant="subtitle1">Lern how to use Material-UI</Typography>
                        <ButtonStyled/>
                        <Grid container spacing={2} justify="center">
                            <Grid item xs={3} md={6} lg={12}>
                                <Paper style={{height: 75, width: '100%'}}/>
                            </Grid>
                            <Grid item xs={3} md={6} lg={12}>
                                <Paper style={{height: 75, width: '100%'}}/>
                            </Grid>
                            <Grid item xs={3} md={6} lg={12}>
                                <Paper style={{height: 75, width: '100%'}}/>
                            </Grid>
                        </Grid>
                        <TextField
                            variant="filled"
                            color="secondary"
                            type="date"
                            label="The Date"
                        />
                        <CheckboxExample/>
                        <ButtonGroup variant="contained" color="primary">
                            <Button startIcon={<SaveIcon/>}>
                                Save
                            </Button>
                            <Button startIcon={<DeleteIcon/>}>
                                Discard
                            </Button>
                        </ButtonGroup>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </header>
                </div>
            </Container>
        </ThemeProvider>
    );
}

const myTheme = createMuiTheme({
    typography: {
        h2: {
            fontSize: 36,
            marginBottom: 15
        }
    },
    palette: {
        primary: {
            main: orange[400]
        },
        secondary: {
            main: green[400]
        }
    }
});

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color: 'white',
        padding: '5px 30px'
    }
});

function ButtonStyled() {
    const cssClasses = useStyles();
    return <Button className={cssClasses.root}>Styled Button</Button>
}

function CheckboxExample() {
    const [isChecked, setChecked] = React.useState(false);
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={isChecked}
                    icon={<SaveIcon/>}
                    checkedIcon={<SaveIcon/>}
                    onChange={(e) => setChecked(e.target.checked)}
                    color="secondary"
                />
            }
            label="Testing Checkbox"
        />

    )
}

export default App;
