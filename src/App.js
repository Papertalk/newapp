import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Cart = React.lazy(() => import("./components/Cart"));
const Header = React.lazy(() => import("./components/Header.js"));
const Product = React.lazy(() => import("./components/Product"));

function App() {
  return (
    <Router>
      <div className="container">
        <Suspense fallback={<div className="Loading-content">Loading..</div>}>
          <Header />
          <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/carts" exact component={Cart} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
