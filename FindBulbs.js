function findOnBulbs(numberOfBulbs){
	let onBulbs = 0;
	let bulb = 1;
	let person = 1;
	for (bulb = 1; bulb <= numberOfBulbs; bulb++) {
		let factors = 0;
		for (person = 1; person * person <= numberOfBulbs; person++) {	
			if (bulb % person == 0) 
			{
				factors++;		
				if (bulb / person != person)
				{
					factors++;
				}
			}
		}
		if (factors % 2 == 1)
		{	
			console.log("Light bulb " + bulb + " will be on");
			onBulbs++;
		}
	}
	return onBulbs;
}
// let numberOfBulbs = 100;
findOnBulbs(100)
// let onBulbs = findOnBulbs(numberOfBulbs);
// console.log("Total " + onBulbs+ " light bulbs will be on in the end out of "+ numberOfBulbs + " light bulbs");