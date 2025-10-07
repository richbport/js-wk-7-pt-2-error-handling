function makeCoffee(beans) {
    try {
        if (!beans) throw new Error("BEANS EMPTY!"); // Yelling
        return "🍵";
    } catch (error){
      console.error("Coffee emergency:", error); // Log the yell
      return "Couldn't make coffee"; // Graceful fallback
    }
}