/*
 * @Description:
 * @Date: 2021-09-16 11:23:44
 * @LastEditTime: 2021-09-16 15:14:03
 */
import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routers from "./router";

function App() {
  const [tabList, setTabList] = useState(["tab1", "tab2"]);
  console.log(routers);
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="list">
          {tabList.map((v) => {
            return (
              <a className="item" href={v}>
                {v}
              </a>
            );
          })}
        </div> */}
        <BrowserRouter>
          <Switch>
            {routers.map((router) => {
              return (
                <Route
                  key={router.path}
                  exact
                  path={router.path}
                  component={router.component}
                ></Route>
              );
            })}
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
