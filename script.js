// Basic Try-Catch (Synchronous)

function makeCoffee(beans) {
    try {
        if (!beans) throw new Error("BEANS EMPTY!"); // Yelling
        return "🍵";
    } catch (error){
      console.error("Coffee emergency:", error); // Log the yell
      return "Couldn't make coffee"; // Graceful fallback
    }
}

// Async Error Handling

async function orderPizza() {
  try {
    const menu = await fetchMenu();  // Could fail
    const pizza = await cookPizza(menu); // Could fail
    return deliver(pizza); // Could fail
  } catch (error) {
    console.log("Pizza disaster:", error);
    return "Free coupon"; // Recovery
  }
}

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

// Validate Data Flow

// Check between steps
const user = await getUser();
console.log("User:", user);
const orders = await getOrders(user.id);

// Test Error Paths
getUser(-1).catch(console.error);

// Monitor Unhandled Rejections
window.addEventListener("unhandledrejection", event) => {
  alert(`UNCAUGHT ERROR: ${event.reason}`);
}

// BAD - Errors disappear
fetch(url).then(data => console.log(data));

// GOOD - Explicit handling
fetch(url)
.then(handleData)
.catch(logError)
.finally(cleanup);

// BAD - "Callback hell" reborn
getUser().then(user => {
  getOrders(user.id).then(orders => {
    // ...
  })
})

// GOOD - Flat async/await
async function loadData() {
  const user = await getUser();
  const orders = await getOrders(user.id);
}