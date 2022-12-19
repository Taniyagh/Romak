export function login(token) {
    localStorage.setItem("token", JSON.stringify(token));
}

//it will remove token from storage
export function logout() {
  localStorage.removeItem("token");
}


//get token from storage
export function getToken() {
  return JSON.parse(localStorage.getItem("token"));
}

//check token exist
export function isLogin() {
  let token = getToken();
  return token && token.length > 0;
}
