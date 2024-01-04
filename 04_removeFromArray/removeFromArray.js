const removeFromArray = function(array, ...itemToRemove) {
    let newArray = array.filter(item => !itemToRemove.includes(item));
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
