var text = document.getElementById('textarea'); 
var store = "";
function save(){
    var inputval = document.getElementById('key');
    var status = document.getElementById('status');
    console.log(inputval.value);
    if(text.value === ""){
        text.value = "none";
    }
    (async ()=>{
     await fetch(`https://first-api-1.onrender.com/make_wet/${encodeURIComponent(inputval.value)}/${encodeURIComponent(text.value)}`)
       .then(response => {
        status.innerHTML = "saving...";
        console.log('saving...');
        return response.json();
       })
       .then(data =>{
        status.innerHTML = data.key;
        console.log("Data :",data.key);
       })
       .catch(error =>{ 
        status.innerHTML = "Api Not Responding";
        console.log("error found")
       });
    })();
};

function change() {
    var main = document.getElementById('main');
    var inputval = document.getElementById('key');
    store = inputval.value;
    
    if (key.value === '') {
        return null;
    }

    var next = document.getElementById('next');
    var text = document.getElementById('textarea');
    text.style.width = '60%';
    text.style.height = '500px';
    var status = document.getElementById('status');

    var check;
    status.innerHTML = "Please wait...";
    (async()=>{
        await fetch(`https://first-api-1.onrender.com/fuck/${inputval.value}`)
       .then(response => {
        status.innerHTML = "fetching...";
        console.log('fetching...');
        return response.json();
       })
       .then(data =>{
        console.log("Data :",data.key);
        status.innerHTML = "Checking Data...";
        check = data.key;

        if (check !== "") {
            console.log("Data is not empty")
            status.innerHTML = "fetched existing data....";
            text.innerHTML = check;
            main.style.display = 'none';
            next.style.display = 'block';
        } else {
            console.log("Data is empty")
            status.innerHTML = "Created empty notepad";
            text.innerHTML = '';
            main.style.display = 'none';
            next.style.display = 'block';
        }
       })
       .catch(error =>{ 
        status.innerHTML = "Api is not working";
        console.log("error found")
       });
    })();
    
}
