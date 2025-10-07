// Basic Try-Catch (Synchronous)

// function makeCoffee(beans) {
//     try {
//         if (!beans) throw new Error("BEANS EMPTY!"); // Yelling
//         return "🍵";
//     } catch (error){
//       console.error("Coffee emergency:", error); // Log the yell
//       return "Couldn't make coffee"; // Graceful fallback
//     }
// }

//  Async Error Handling

async function orderPizza() {
  try {
    const menu = await fetchMenu();
    const pizza = await cookPizza(menu);
    return deliver(pizza);
  } 
}