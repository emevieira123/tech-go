import { Router } from "./infra/routes"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
