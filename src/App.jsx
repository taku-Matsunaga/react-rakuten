import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import Itemlist from "./components/Itemlist";
import Button from '@material-ui/core/Button';

const styles = {
  listBtn: {
    display: 'flex',
    listStyle: 'none',
  },
  padding: {
    padding: '10px',
  },
  body: {
    background: '#ddd',
    flex: 1,
  }
};

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?';
  const appID = YOUR_RAKUTEN_API_APP_ID
  const result = await axios.get(`${requestUrl}applicationId=${appID}&keyword=${keyword}`);
  console.log(result);
  return result;
}

const App = () => {
  const languages = ["React", "Vue", "Angular"]; 
  return (
    <BrowserRouter>
      <div>
        <h1>GET Rakuten API</h1>

        <ul style={styles.listBtn}>
          <li style={styles.padding}>
          <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          >
            React
          </Button>
          </li>
          <li style={styles.padding}>
          <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/vue"
          >
            Vue
          </Button>
          </li>
          <li style={styles.padding}>
          <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/angular"
          >
            Angular
          </Button>
          </li>
        </ul>

        <hr />

        <Route
          exact
          path="/"
          render={(props) => (
            <Itemlist
              language={languages[0]}
              getData={(keyword) => getDataFromAPI(keyword)}
            />
          )}
        />
        <Route
          exact
          path="/vue"
          render={(props) => (
            <Itemlist
              language={languages[1]}
              getData={(keyword) => getDataFromAPI(keyword)}
            />
          )}
        />
        <Route
          exact
          path="/angular"
          render={(props) => (
            <Itemlist
              language={languages[2]}
              getData={(keyword) => getDataFromAPI(keyword)}
            />
          )}
        />
    
      </div>
    </BrowserRouter>
  );
};
export default App;
