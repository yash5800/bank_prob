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



function save(){
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
    console.log(send)
    status.style.color = "yellow";
    status.innerHTML = "saving..";
    document.getElementById('loading').style.display = 'flex';
    (async ()=>{
     await fetch(`https://first-api-1.onrender.com/make_wet/${send}`)
       .then(response => {
        console.log('auto saving...');
        return response.json();
       })
       .then(data =>{
        document.getElementById('loading').style.display = 'none';
        status.innerHTML = data.key;
        console.log("Data :",data.key);
       })
       .catch(error =>{ 
        document.getElementById('loading').style.display = 'none';
        status.innerHTML = "Api Not Responding";
        console.log("error found");
       });
    })();
};


function change() {
    var main = document.getElementById('main');
    var inputval = document.getElementById('key');
    var loading = document.getElementById("logo_main");
    store = inputval.value;
    
    if (key.value === '') {
        return null;
    }

    var next = document.getElementById('next');
    var text = document.getElementById('textarea');
    text.style.width = '60%';
    text.style.height = '500px';
    var status = document.getElementById('status');
    status.style.color = "white";
    var check;
    status.innerHTML = "Please wait...";
    document.body.style.overflow = 'hidden';
    loading.style.display = 'flex';
    
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
        loading.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (check !== "") {
            console.log("Data is not empty");
            status.innerHTML = "Fetched Data";
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
        document.body.style.overflow = 'auto';
        loading.style.display = 'none';
        status.innerHTML = "Try again";
        console.log("error found");
       });
    })();
    
}

function send(){
    var email = document.getElementById('email').value;
    if(email == ""){
        return null;
    }
    if(text.value == "none"){
        status.innerHTML = "email not sent";
        return null;
    }
    var status = document.getElementById('status');    
    status.style.color = "yellow";
    status.innerHTML = "sending..";
    document.getElementById('loading').style.display = 'flex';
    var inputval = document.getElementById('key').value;
    (async()=>{
     await fetch(`https://first-api-6bmo.onrender.com/submit/${email}/${inputval}`,{ method: 'POST' })
       .then(response =>{
          return response.json();
       })
       .then(data => {
          document.getElementById('loading').style.display = 'none';
          console.log("Data :",data.key);
          status.innerHTML = data.key;
       })
       .catch(error =>{ 
        document.getElementById('loading').style.display = 'none';
        status.innerHTML = "email not sent";
        console.error(error);
       });
    })();
}

function del(){
    var inputval = document.getElementById('key').value;
    var status = document.getElementById('status');
    console.log(inputval);
    if(text.value === "none" || text.value === ""){
        return null;
    }
    status.style.color = "red";
    status.innerHTML = "deleting..";
    document.getElementById('loading').style.display = 'flex';
    (async ()=>{
     await fetch(`https://first-api-1.onrender.com/wipe/${inputval}`)
       .then(response => {
        console.log('deleting...');
        return response.json();
       })
       .then(data =>{
        document.getElementById('loading').style.display = 'none';
        location.reload();
        status.innerHTML = data.key;
        console.log("Data :",data.key);
       })
       .catch(error =>{ 
        document.getElementById('loading').style.display = 'none';
        status.innerHTML = "Api Not Responding";
        console.log("error found");
       });
    })();
};