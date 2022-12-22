//Setting token to local storage
export function login(token) {
  localStorage.setItem("token", JSON.stringify(token));
}

//Removing token from storage
export function logout() {
  localStorage.removeItem("token");
}

//Getting token from storage
export function getToken() {
  return JSON.parse(localStorage.getItem("token"));
}

//check token exist
export function isLogin() {
  let token = getToken();
  return token && token.length > 0;
}
