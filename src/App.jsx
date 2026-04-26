import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { homeRoutes } from "./routes/home.route";
import { trailsRoutes } from "./routes/trails.route";
import { paymentRoutes } from "./routes/payment.route";
import { fallbackRoutes } from "./routes/fallback.route";
import { standaloneRoutes } from "./routes/standalone.route";
import { khaltiRoutes } from "./routes/khalti.route";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {homeRoutes}
          {trailsRoutes}
          {paymentRoutes}
          {standaloneRoutes}
          {fallbackRoutes}
          {khaltiRoutes}
        </Routes>
      </Router>
    </>
  );
}

export default App;
