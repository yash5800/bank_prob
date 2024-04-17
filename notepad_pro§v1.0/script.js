var text = document.getElementById('textarea'); 
var store = "";
var size = document.getElementById('size');

function encodeBase64(text) {
    var latin1Text = encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
    }); // Convert Unicode characters to Latin1-compatible format
    return btoa(latin1Text);
}

function decodeBase64(encodedText) {
    var latin1Text = atob(encodedText);
    return decodeURIComponent(encodeURIComponent(latin1Text)); // Convert Latin1-compatible text back to Unicode characters
}

text.addEventListener('input',()=>{
    var inputval = document.getElementById('key').value;
    var status = document.getElementById('status');
    console.log(inputval);
    console.log(text.value.length)
    size.innerHTML = `${text.value.length}/11500`;
    if(text.value.length >= 11500){
        status.innerHTML = "Unabel no save";
        return;
    }
    if(text.value === ""){
        text.value = "none";
    }
    const hash = encodeBase64(text.value);
    console.log(hash);
    const send = JSON.stringify({key:inputval,val:hash});
    console.log(send);
    status.innerHTML = "saving...";
    (async ()=>{
     await fetch(`https://first-api-1.onrender.com/make_wet/${send}`)
       .then(response => {
        console.log('auto saving...');
        return response.json();
       })
       .then(data =>{
        status.innerHTML = data.key;
        console.log("Data :",data.key);
       })
       .catch(error =>{ 
        status.innerHTML = "Api Not Responding";
        console.log("error found");
       });
    })();
});


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
            text.innerHTML = decodeBase64(check);
            main.style.display = 'none';
            next.style.display = 'block';
            size.innerHTML = `${text.value.length}/11500`;
        } else {
            console.log("Data is empty")
            status.innerHTML = "Created empty notepad";
            text.innerHTML = '';
            main.style.display = 'none';
            next.style.display = 'block';
            size.innerHTML = `0/11500`;
        }
       })
       .catch(error =>{ 
        status.innerHTML = "Api is not working";
        console.log("error found")
       });
    })();
    
}
