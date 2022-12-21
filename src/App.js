import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import { Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute";


function App() {

  return (
    <>
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
