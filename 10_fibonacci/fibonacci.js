const fibonacci = function(index) {
    if (String(index).match(/[a-z]/i)) {
        index = parseInt(index);
    }

    if (index === 0 || index === "0") {
        return 0;
    }

    if (index < 0) {
        return "OOPS";
    }

    array = [1,1];
    for (let i = 0; i < index; i++) {
        array.push(array[i] + array[i+1]);
    }
    console.log(array);
    return array[index-1];
};

console.log(fibonacci("0"));

// Do not edit below this line
module.exports = fibonacci;
