let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.shift();
largeCountries.unshift("China");
largeCountries.pop();
largeCountries.push("Pakistan");

document.writeln("<h2>The 5 largest countries in the world</h2>")
for (let i = 0; i < largeCountries.length; i++) {
  document.writeln("<li>" + largeCountries[i]) + "</li>";
}