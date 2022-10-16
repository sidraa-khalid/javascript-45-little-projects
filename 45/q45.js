function cars(manufacturer, model_number, ...extras) {
  var obj1 = {
    manufacturer,
    model_number,
    ...extras,
  };
  return obj1;
}
console.log(cars("x", "6123"));
console.log(cars("yz", "1253", { name: "civic" }));
console.log(cars("z", "3123", { name: "cultus", color: "blue" }));
console.log(cars("w", "5123", { name: "mira", color: "pink", size: "7" }));
