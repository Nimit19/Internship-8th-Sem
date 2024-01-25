// Note: By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum Colors {
  Red,
  Blue,
  Green,
  Yellow,
}
let currentColor = Colors.Blue;
console.log(currentColor); // 1

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
console.log(StatusCodes.NotFound); // 404
console.log(StatusCodes.Success); // 202

// enum CardinalDirections {
//   North = 1,
//   East,
//   South,
//   West,
// }
// // logs 1
// console.log(CardinalDirections.North);
// // logs 4
// console.log(CardinalDirections.West);

enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

console.log(CardinalDirections.North); // "North"

console.log(CardinalDirections.West); // "West"
