/*

Find the TOP most expensive item(s). 
The amount of top most expensive items to find is given as the first argument and the item's data is the second argument.

Input: an int and list of dicts - each dict has two keys: "name" and "price"
Output: an object

*/

function biggerPrice(limit, data) {

    let prices = [];
    let highest = [];
    let pricesList = [];

    for (i = 0; i < data.length; i++) {
        prices.push(data[i]['price']);
    }

    prices.sort(function(a, b) {return b - a});
    
    for (j = 0; j < limit; j++) {
        pricesList.push(prices[j]);
    }

    prices = pricesList;

    for (k = 0; k < prices.length; k++) {
        for (l = 0; l < data.length; l++) {
            if (data[l]['price'] == prices[k]) {
                highest.push(data[l]);
            }
        }
    }

    console.log(highest);
 
};

biggerPrice(2, [{"name": "bread", "price": 100}, {'name': 'wine', 'price': 138}, {'name': 'meat', 'price': 15}, {'name': 'water', 'price': 1}]);
// [{'name': 'wine', 'price': 138}, {'name': 'bread', 'price': 100}]

biggerPrice(1, [{'name': 'pen', 'price': 5}, {'name': 'whiteboard', 'price': 170}]);
// [{'name': 'whiteboard', 'price': 170}]