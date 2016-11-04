var shoppingList = [
	
	{	name: "milk",
		price: 3.49
	},
	
	{	name: "bread",
		price: 2.99
	},
	
    {  name: "apples",
		price: 4.37
	}
   
 ];

//Function to add items to array

function addToList() {
	var newItem = document.getElementById('name').value;
	var newPrice = document.getElementById('price').value;
	var obj = {
		name: newItem,
		price: newPrice
	};
	shoppingList.push(obj);
};

function resetForm() {//clear the value in the txt field
    document.getElementById('name').value = "";
	document.getElementById('price').value = "";
};

function showList() {
	shoppingList.forEach(function(items) {
		var printedList = document.createElement('li');
		printedList.innerHTML = items.name + " $" + items.price.toFixed(2);
		document.getElementById('list').appendChild(printedList);
	});
};
showList();

var itemTotal = 0;
shoppingList.forEach(function(getTotal) {
  itemTotal += getTotal.price
});

var printedTotal = document.createElement('li');
printedTotal.innerHTML = "Total: " + "$" + itemTotal.toFixed(2);
printedTotal.setAttribute('id', 'list-total');
document.getElementById('list').appendChild(printedTotal);











