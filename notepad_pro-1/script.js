var text = document.getElementById('textarea'); 
var store = "";

text.addEventListener('input',Autosaving()); 
text.addEventListener('past',Autosaving()); 
text.addEventListener('keyup',Autosaving()); 
function Autosaving(){
    console.log(store);
    fetch(`https://odd-blue-dove-suit.cyclic.app/make_wet/${encodeURIComponent(store)}/${encodeURIComponent(text.value)}`)
       .then(response => {
        console.log('fetching...');
        return response.json();
       })
       .then(data =>{
        console.log("Data :",data);
       })
       .catch(error => console.log("error found"));

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
    var check;
    
    fetch(`https://odd-blue-dove-suit.cyclic.app/fuck/${inputval.value}`)
       .then(response => {
        console.log('fetching...');
        return response.json();
       })
       .then(data =>{
        console.log("Data :",data);
        check = data.key;

        if (check !== "") {
            console.log("Data is not empty")
            text.innerHTML = check;
            main.style.display = 'none';
            next.style.display = 'block';
        } else {
            console.log("Data is empty")
            text.innerHTML = '';
            main.style.display = 'none';
            next.style.display = 'block';
        }
       })
       .catch(error => console.log("error found"));
}
