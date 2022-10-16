/**
 * The function item takes an arbitrary number of arguments and prints them out.
 * @param items - a rest parameter that takes in any number of arguments
 */

function item(...items) {
  console.log(`the sandwich contains: ${items} `);
}
item("tomato");
item("onion", "mayonese", "chicken");
item("cheese", "lemon");
item("onion", "mayonese", "chicken","cheese", "lemon","tomato","ketchup");