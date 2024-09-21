
const URL = "https://api.themoviedb.org/3/discover/movie?api_key=d92a8cd2fc953e1b600568b97180bdf9";
const getFacts = async () => {
    console.log("gtting data.....");
    let response = await fetch(URL); // Fetch the data
    console.log(response);
    return response;
    
}



// const URL = "https://api.themoviedb.org/3/discover/movie?api_key=d92a8cd2fc953e1b600568b97180bdf9";
// const getFacts = async () => {
//     console.log("gtting data.....");
//     let response = await fetch(URL); // Fetch the data
// 	 return response;
// }
