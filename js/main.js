let firstItem = document.getElementById('one');
firstItem.className = 'complete';

let fourthItem = document.getElementsByTagName('li').item(3);
fourthItem.setAttribute('class', 'cool');


// let newEl = document.createElement('li');
// let newText = document.createTextNode('quinoa');
// newEl.appendChild(newText);
//
// let position = document.getElementsByTagName('ul')[0];
// position.appendChild(newEl);
//
// let removeEl = document.getElementsByTagName('li')[4];
// let containerEl = removeEl.parentNode;
// setTimeout(() => containerEl.removeChild(removeEl), 1000);


// // variable for the welcome message
// let greeting = 'Howdy';
// let name = 'Molly';
// let message = '.please check your order:';
// let welcome = greeting + name + message;
//
// // vars to hold details about the sing
// let sign = 'Montague House';
// let tiles = sign.length;
// let subTotal = tiles * 5;
// let shipping = 7;
// let grandTotal = subTotal + shipping;
//
// // element that has id of greeting
// let el = document.getElementById('greeting');
// el.textContent = welcome;
//
// // element that has id of userSign
// let elSign = document.getElementById('userSign');
// elSign.textContent = sign;
//
// // element that has id of tiles
// let elTiles = document.getElementById('tiles');
// elTiles.textContent = tiles;
//
// // element that has id of subTotal
// let elSubTotal = document.getElementById('subTotal');
// elSubTotal.textContent = '$' + subTotal;
//
// // element that has id of shipping
// let elShipping = document.getElementById('shipping');
// elShipping.textContent = '$' + grandTotal;
