function add (first_number, second_number) {
	return first_number + second_number;
}

function subtract (first_number, second_number) {
	return first_number - second_number;
}

function sum (array) {
	sum = 0;
	i = 0;
	while (i < array.length) {
		sum = sum + array[i];
		i+= 1;
	}
	return sum;
}

function multiply (array) {
	result = 1;
	i = 0;
	while (i < array.length) {
		result = result * array[i];
		i+= 1;
	}
	return result;
}

function power(first_number, second_number) {
	return Math.pow(first_number,second_number);
}

function factorial(number) {
	result = 1
    if (number == 0){
        return result;
	} else {
		
		while(number > 0){
            result = result * number;
            number = number -1;
		}
	}
    return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}