function reqListener () {
  let data = JSON.parse(this.responseText);
  console.log(data);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jgordy");
req.addEventListener("load", reqListener);
req.send();
