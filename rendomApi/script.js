
// displaying api data  in html file
let ParaApi = document.querySelector("#para");
const URL = "https://randomfox.ca/floof/";

const getFacts = async () => {
    console.log("getting Data from Api");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    ParaApi.innerHTML = `<img src="${data.image}" alt="Random Fox" width="300"/>`;
};

getFacts();