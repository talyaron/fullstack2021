import React, { useState } from 'react';
import './Views/styles/global.scss';
import Card from './Views/Comp/Card';
import { Button, TextField, Toolbar, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FormGroup from '@mui/material/FormGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import AppBar from '@mui/material/AppBar';

interface CardsProps {
  url: String;
  text: String;
  id: String;
}

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {

  //1
  // const [url, setUrl] = useState<String>('');
  // const [text, setText] = useState<String>('')

  //2
  let [arr, setArr] = useState<Array<CardsProps>>([])


  function handleOnSubmit(ev: any) {
    ev.preventDefault();

    let { url, text } = ev.target.elements;
    url = url.value; text = text.value;

    //1
    // setUrl(url);
    // setText(text);

    //2
    const newObject = { url, text, id: uid() }
    setArr([...arr, newObject])

    ev.target.reset()

  }

  //3 Delete
  function handleDelete(ev: any) {

    const id = ev.target.id;
    arr = arr.filter(item => item.id !== id)
    setArr([...arr])

  }

  //3 Update
  function handleUpdate(ev: any) {

    ev.preventDefault();

    const id = ev.target.id;
    let { url, text } = ev.target.elements;
    url = url.value; text = text.value;



    const index = arr.findIndex(item => item.id === id)
    arr[index].url = url;
    arr[index].text = text;

    setArr([...arr])


    ev.target.reset()

  }

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static" color="primary">
        <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    </IconButton>
    <Typography variant="h3" color="inherit" component="div">
      Add Photos
    </Typography>
    <form onSubmit={handleOnSubmit}>
          <input type="url" name="url" placeholder='url' required />
          <input type="text" name="text" placeholder='text' required />
          <input type="submit" name="submit" value="Submit" required />
        </form>
  </Toolbar>
        </AppBar>


    <div className="App">
      <header className="App-header">



        {/* 1 */}
        {/* <Card img={`${url}`} text={`${text}`} /> */}

        <div className="container">

          {arr.map((item, i) => {
            return (
              <div key={i} className="wrapper">
                <Card img={item.url} text={item.text} />

                {/* 3 Delete */}
                <Button
                  startIcon={<DeleteIcon />}
                  id={`${item.id}`} onClick={handleDelete}
                  variant="contained"
                  color="error"
                  size="small"
                  style={{
                    fontSize: 10,
                    width: 150,
                  }}>
                  Delete
                </Button>

                {/* 3 Update */}
                  <form id={`${item.id}`} onSubmit={handleUpdate}>
                <FormGroup>
                    <TextField type="url" name="url" label="Other url" color="success" focused required />
                    <TextField type="text" name="text" label="Other Text" color="secondary" focused required />
                    <Button type="submit" name="submit" variant="contained" color="success">
                      Update
                    </Button>
                </FormGroup>
                  </form>
              </div>
            )

          })}
        </div>

      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
