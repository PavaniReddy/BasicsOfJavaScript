//var key = "AIzaSyCajiqJ-rTOJs9h61GvGsJwypJeIMyH5Sg";

let products = [];
let prod = [];
const pagination = {
  start: 0,
  maxItems: 3,
  k: 0,
};
function renderSearch() {
  var searchBarValue = document.getElementById("searchbar").value;
  console.log(searchBarValue);
  var url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCajiqJ-rTOJs9h61GvGsJwypJeIMyH5Sg&type=video&part=snippet&maxResults=15&q=${searchBarValue}&nextPageToken=CDIQAA`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => SaveData(data));
}
function SaveData(data) {
  products = data;
  getNextItems(products.items);
}
function displayData(data) {
  video = '<ul id="product-listing">';
  let result = document.getElementById("root");
  for (item of data) {
    let snippet = item.snippet;
    video += `<li>
        <div class="product"> 
            <div class="image"><img src="${snippet.thumbnails.high.url}"/></div>   
            <div class="title">${snippet.title}</div>
            <div class="channelTitle">${snippet.channelTitle}</div>
        </div>
    </li>`;
  }
  result.innerHTML = video;
  let left = document.getElementById("prev");
  left.style.visibility = "visible";
  let right = document.getElementById("next");
  right.style.visibility = "visible";
  let res = document.getElementById("button");
  res.style.visibility = "visible";
  console.log(res);
}

function getNextItems(data) {
  const startItem = pagination.start;
  const lastItem = pagination.start + pagination.maxItems;
  pagination.start = lastItem;
  prod = data.slice(startItem, lastItem);
  displayData(prod);
  pagination.k = pagination.k + 1;
  text = `${pagination.k}`;
  document.getElementById("button").innerHTML = text;
}
function Next(){
    getNextItems(products.items);
}

function getPreviousItems(data){
    const prevEnd = pagination.start-pagination.maxItems;
    const prevStart = prevEnd-pagination.maxItems;
    pagination.start=prevEnd;
    prod=data.slice(prevStart,prevEnd);
    displayData(prod);
    if(pagination.k>0){
    pagination.k=pagination.k-1;
}
    text=`${pagination.k}`;
    document.getElementById("button").innerHTML=text;
}
function prev(){
    getPreviousItems(products.items);
}

