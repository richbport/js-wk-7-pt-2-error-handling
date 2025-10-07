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

// async function orderPizza() {
//   try {
//     const menu = await fetchMenu();  // Could fail
//     const pizza = await cookPizza(menu); // Could fail
//     return deliver(pizza); // Could fail
//   } catch (error) {
//     console.log("Pizza disaster:", error);
//     return "Free coupon"; // Recovery
//   }
// }

// Log liberally

fetch(url)
.then(res => {
  console.log("Raw response:", res) // Inspect here
  return res.json();
})

// Use Debugger

async function debug() {
  debugger; // Pause here
  const data = await fetchData();
}