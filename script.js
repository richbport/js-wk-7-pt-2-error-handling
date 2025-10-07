function makeCoffee(beans) {
    try {
        if (!beans) throw new Error("BEANS EMPTY!"); 
        return "🍵";
    } catch (error){
      console.error("Coffee emergency:", error);
      return "Couldn't make coffee";
    }
}