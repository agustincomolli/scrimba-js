// Objects - store data in-depth - composite / complex data type
// key-value pairs

let course = {
  title: "Aprensa CSS gratis",
  lessons: 16,
  creator: "Per Harald Borgen",
  length: 63,
  level: 2,
  isFree: true,
  tags: ["html", "css"]
};

document.writeln("<p>Duración del curso: " + course.length + " minutos.</p>");
document.writeln("<p>Etiquetas del curso: " + course.tags + ".</p>");

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

castle = {
  name: "San Giusto Abbey {Medieval Tower}",
  price: 173,
  hasBathroom: true,
  pictures: ["front.jpg", "rooms.jpg"]
};

document.writeln("<h2>Castillos</h2>");
document.writeln("<p>" + castle.name + "</p>");
document.writeln("<p>$ " + castle.price + "</p>");