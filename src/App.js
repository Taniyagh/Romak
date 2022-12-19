import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Pages/Login/Login";
import { URL_Route } from "./setup";

function App() {
  console.log("hi");
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Login/>} />
      </Routes> */}
      <Suspense>
          <Routes>
            {
              routes.map((route, key) => {
                return(
                  route.protected? <Route key={key} path={route.path} element={<ProtectedRoute component={<route.component/>}/>}/>:
                  <Route key={key} path={route.path} element={<route.component/>}/>
                )}
              )
            }      
          </Routes>
        </Suspense>
    </>
  );
}

export default App;
