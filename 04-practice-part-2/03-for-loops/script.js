let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

document.writeln("<h2>The 5 largest countries in the world</h2>")
for (let i = 0; i < largeCountries.length; i++) {
  document.writeln("<li>" + largeCountries[i]) + "</li>";
}