var list = document.getElementById('list');
console.log(list.innerText);
var add = document.getElementById('addElem');
console.log(addElem.innerText); ///pobieramy tekst w środku guzika 
add.addEventListener('click', function () {
    var number = document.getElementsByTagName('li');
    list.innerHTML += '<li>item ' + number.length + '</li>'
    console.log(list.length);
});
//kod testowy
//var list = document.getElementsByTagName('li'); //pobieramy wszystkie 
//console.log(list.length);

//wypisuje sobie ilość elementów w kolekcji
//var element = document.createElement('li');
//element.classList.add('li');
//document.querySelector('ul').appendChild(element);

console.log(element.length); //dynamicznie
