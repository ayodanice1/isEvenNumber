
// Using recursion, this program determines if a given number is Odd or Even.
const isEven = whole_numnber => {
	if (whole_numnber < 0)
		console.log(whole_numnber + " is not a positive whole number." +
			"You must enter a positive whole number. \n" + 
			"Run program again to try a new entry.");
	else if (whole_numnber == 0)
		//return true;
		console.log('true');
	else if (whole_numnber == 1)
		//return false;
		console.log('false');
	else if (whole_numnber > 1){
		isEven(whole_numnber -2);
	}
};

// running from the command-line interface
// node: $node testForEvenNumber.js Integer
// for example, $node testForEvenNumber.js 12
let argument = process.argv[2];
isEven(parseInt(argument));