//  select the parent elements
let header = document.querySelector(".header");

let list = document.querySelector(".list");

let icon = document.querySelector(".icon");

// github api request

function reqListener () {
  let data = JSON.parse(this.responseText);
console.log(data);
  header.innerHTML = `<h1>${data.name}</h1>`;

  list.innerHTML = `<li>
                      <span>Name: </span>${data.name}
                    </li>
                    <li>
                      <span>Github URL: </span><a>${data.url}</a>
                    </li>
                    <li>
                      <span>Email: </span><a>${data.email}</a>
                    </li>
                    <li>
                      <span>Company: </span>${data.company}
                    </li>
                    <li>
                      <span>Website: </span><a href="${data.blog}">${data.blog}</a>
                    </li>`;

  icon.innerHTML = `<img src=${data.avatar_url}>`;

  console.log(data.name);
  console.log(header.innerHTML);
}

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/jgordy");
req.addEventListener("load", reqListener);
req.send();
