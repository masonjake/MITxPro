let multiplier = 1;

for (let i = 1; i <= 10; i++) {
	let out = "";
	for (let x = 1; x <= 10; x++) {
		if (x * multiplier < 10) {
			out += x * multiplier + "  ";
		} else {
			out += x * multiplier + " ";
		}
	}
	console.log(out);
	multiplier += 1;
}
