import React from "react";
import Authmiddleware from "./routes/middleware/Authmiddleware";
import { userRoutes ,authRoutes} from "./routes/allRoutes";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import Errorpage from "../src/pages/Error/errorpage"


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
            path={route.path}
            // layout={Layout}
            component={route.component}
            key={idx}
            isAuthProtected={true}
            exact
          />
          ))}
          {/* <Errorpage/> */}
          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              // layout={Layout}
              component={route.component}
              key={idx}
              // isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
