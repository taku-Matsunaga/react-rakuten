import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';
import Itemlist from "./components/Itemlist";

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?';
  const appID = '1098158236145947168';
  const result = await axios.get(`${requestUrl}applicationId=${appID}&keyword=${keyword}`);
  console.log(result);
  return result;
}

const App = () => {
  const languages = ["React", "Vue", "Angular"]; // 追加
  return (
    <BrowserRouter>
      <div>
        <h1>react app</h1>

        <ul>
          <li>
            <Link to="/">React</Link>
          </li>
          <li>
            <Link to="/vue">Vue</Link>
          </li>
          <li>
            <Link to="/angular">Angular</Link>
          </li>
        </ul>

        <hr />

        <Route
          exact
          path="/"
          render={(props) => (
            <Itemlist
              language={languages[0]}
              getData={(keyword) => getDataFromAPI(keyword)} // getDataという名前で関数を渡す
            />
          )}
        />
        <Route
          exact
          path="/vue"
          render={(props) => (
            <Itemlist
              language={languages[1]}
              getData={(keyword) => getDataFromAPI(keyword)} // getDataという名前で関数を渡す
            />
          )}
        />
        <Route
          exact
          path="/angular"
          render={(props) => (
            <Itemlist
              language={languages[2]}
              getData={(keyword) => getDataFromAPI(keyword)} // getDataという名前で関数を渡す
            />
          )}
        />
    
      </div>
    </BrowserRouter>
  );
};
export default App;