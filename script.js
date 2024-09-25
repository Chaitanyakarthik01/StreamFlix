const URL = "https://api.themoviedb.org/3/discover/movie?api_key=d92a8cd2fc953e1b600568b97180bdf9";
const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL); // Fetch the data
    console.log(response);// Log the actual data
    let data = await response.json()
    console.log(data);

}


function auth(){
    var emailaddress = document.getElementById('emailaddress').value;
    var password = document.getElementById('password').value;

    if(emailaddress == 'admin@gmail.com' && password == 1234567)
    {
        window.location.assign('main.html');
        alert("login successfully");
    }
    else{
        alert("Invalid Information");
        return;
    }
}



