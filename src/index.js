module.exports = function reverse (n) {
	let reversed = String(Math.abs(n)).split("").reverse().join("");
	return +reversed;
}
