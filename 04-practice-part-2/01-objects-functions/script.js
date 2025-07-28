// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country
let person = {
  name: "Agustín",
  age: 48,
  country: "Argentina",
  // Create a function, logData(), that uses the person object to create a
  // string in the following format: 
  // "Per is 35 years old and lives in Norway"
  logData: function () {
    message = person["name"] + " tiene " + person["age"] + " años y vive en " + person["country"];
    document.writeln(message);
    console.log(message);
  }
}

// Call the logData() function to verify that it works
person.logData();