// Function to calculate the total dynamically
function calculateTotal() {
    const menuItems = [
        { id: "tea", price: 10 },
        { id: "hot_coffee", price: 45 },
        { id: "hot_chocolate", price: 65 },
        { id: "Nutella_Hot_Chocolate", price: 75 },
        { id: "butterscotch_shake", price: 80 },
        { id: "Chocolate milkshake", price: 80 },
        { id: "Nutella milkshake", price: 99 },
        { id: "Oreo milkshake", price: 99 },
        { id: "truffle pastry", price: 89 },
        { id: "Blueberry cheese cake", price: 130 },
        { id: "Biscoff Cheese Cake", price: 130 },
        { id: "brownie with ice cream", price: 99 },
        { id: "Chocolate waffle", price: 130 },
        { id: "nutella waffle", price: 130 },
        { id: "red sauce pasta", price: 110 },
        { id: "white sauce pasta", price: 120 },
        { id: "pink sauce pasta", price: 130 },
        { id: "mac n cheese", price: 150 },
        { id: "aloo paratha", price: 40 },
        { id: "paneer paratha", price: 60 },
        { id: "poha", price: 50 },
        { id: "bread butter toast", price: 30 },
        { id: "upma", price: 60 },
        { id: "Uttapam", price: 79 },
        { id: "idli sambar", price: 79 },
        { id: "salted fries", price: 80 },
        { id: "peri peri fries", price: 90 },
        { id: "aloo chola chaat", price: 90 },
        { id: "paneer chaat", price: 129 },
        { id: "aloo grill sandwich", price: 70 },
        { id: "Veg Grilled Sandwich", price: 80 },
        { id: "paneer taka tak sandwich", price: 120 },
        { id: "classic american potato burger", price: 80 },
        { id: "classic american paneer burger", price: 99 },
        { id: "ott cheese melt burger", price: 99 },
        { id: "veg steam momos", price: 70 },
        { id: "veg fried momos", price: 80 },
        { id: "veg kurkure momos", price: 90 },
        { id: "steam paneer momos", price: 80 },
        { id: "crispy corn", price: 99 },
        { id: "crispy chinese bhel", price: 80 },
        { id: "honey chilli potato", price: 99 },
        { id: "chilli mushroom", price: 129 },
        { id: "manchurian", price: 90 },
        { id: "veg fried rice", price: 90 },
        { id: "egg fried rice", price: 99 },
        { id: "veg noodles with manchurian", price: 110 },
        { id: "fried rice with manchurian", price: 160 },
        { id: "veg roll", price: 60 },
        { id: "paneer roll", price: 90 },
        { id: "egg roll", price: 90 },
        { id: "veg dum biryani with raita", price: 89 },
        { id: "egg dum biryani with raita", price: 99 },
        { id: "paneer dum biryani with raita", price: 99 },
        { id: "cold_coffee" ,price:80}
    ];

    let total = 0;

    menuItems.forEach(item => {
        const quantity = parseInt(document.getElementById(item.id).value) || 0; // Get quantity or default to 0
        total += item.price * quantity;
    });

    document.getElementById("totalAmount").innerText = total; // Update the total in the UI
}

// Function to simulate placing an order
function placeOrder() {
    const menuItems = [
        { id: "tea", name: "Tea", price: 10 },
        { id: "hot_coffee", name: "Hot Coffee", price: 45 },
        { id: "hot_chocolate", name: "Hot Chocolate", price: 65 },
        { id: "Nutella_Hot_Chocolate", name:"Nutella_Hot_Chocolate", price: 75 },
        { id: "butterscotch_shake",name:"butterscotch_shake", price: 80 },
        { id: "Chocolate milkshake",name:"Chocolate milkshake", price: 80 },
        { id: "Nutella milkshake",name:"Nutella milkshake", price: 99 },
        { id: "Oreo milkshake",name:"Oreo milkshake", price: 99 },
        { id: "truffle pastry",name:"truffle pastry" , price: 89 },
        { id: "Blueberry cheese cake",name:"Blueberry cheese cake", price: 130 },
        { id: "Biscoff Cheese Cake",name:"Biscoff Cheese Cake", price: 130 },
        { id: "brownie with ice cream",name:"brownie with ice cream", price: 99 },
        { id: "Chocolate waffle",name:"Chocolate waffle", price: 130 },
        { id: "nutella waffle",name:"nutella waffle", price: 130 },
        { id: "red sauce pasta",name:"red sauce pasta", price: 110 },
        { id: "white sauce pasta",name:"white sauce pasta", price: 120 },
        { id: "pink sauce pasta",name:"pink sauce pasta", price: 130 },
        { id: "mac n cheese",name:"mac n cheese", price: 150 },
        { id: "aloo paratha",name:"aloo paratha", price: 40 },
        { id: "paneer paratha",name:"paneer paratha", price: 60 },
        { id: "poha",name:"poha", price: 50 },
        { id: "bread butter toast",name:"bread butter toast", price: 30 },
        { id: "upma",name:"upma", price: 60 },
        { id: "Uttapam",name:"Uttapam", price: 79 },
        { id: "idli sambar",name:"idli sambar", price: 79 },
        { id: "salted fries",name:"salted fries", price: 80 },
        { id: "peri peri fries",name:"peri peri fries", price: 90 },
        { id: "aloo chola chaat",name:"aloo chola chaat", price: 90 },
        { id: "paneer chaat",name:"paneer chaat", price: 129 },
        { id: "aloo grill sandwich",name:"aloo grill sandwich", price: 70 },
        { id: "Veg Grilled Sandwich",name:"Veg Grilled Sandwich" , price: 80 },
        { id: "paneer taka tak sandwich",name:"paneer taka tak sandwich", price: 120 },
        { id: "classic american potato burger",name:"classic american potato burger", price: 80 },
        { id: "classic american paneer burger",name:"classic american paneer burger", price: 99 },
        { id: "ott cheese melt burger",name:"ott cheese melt burger", price: 99 },
        { id: "veg steam momos",name:"veg steam momos", price: 70 },
        { id: "veg fried momos",name:"veg fried momos", price: 80 },
        { id: "veg kurkure momos",name:"veg kurkure momos", price: 90 },
        { id: "steam paneer momos",name:"steam paneer momos", price: 80 },
        { id: "crispy corn",name:"crispy corn", price: 99 },
        { id: "crispy chinese bhel",name:"crispy chinese bhel", price: 80 },
        { id: "honey chilli potato",name:"honey chilli potato", price: 99 },
        { id: "chilli mushroom",name:"chilli mushroom", price: 129 },
        { id: "manchurian",name:"manchurian", price: 90 },
        { id: "veg fried rice",name:"veg fried rice", price: 90 },
        { id: "egg fried rice",name:"egg fried rice", price: 99 },
        { id: "veg noodles with manchurian",name:"veg noodles with manchurian", price: 110 },
        { id: "fried rice with manchurian",name:"fried rice with manchurian", price: 160 },
        { id: "veg roll",name:"veg roll", price: 60 },
        { id: "paneer roll",name:"paneer roll", price: 90 },
        { id: "egg roll",name:"egg roll", price: 90 },
        { id: "veg dum biryani with raita",name:"veg dum biryani with raita", price: 89 },
        { id: "egg dum biryani with raita",name:"egg dum biryani with raita", price: 99 },
        { id: "paneer dum biryani with raita", name: "Paneer Dum Biryani with Raita", price: 99 },
        { id: "cold_coffee" , name:"cold_coffee" ,price:80}
    ];

    const order = [];
    let total = 0;

    menuItems.forEach(item => {
        const quantity = parseInt(document.getElementById(item.id).value) || 0;
        if (quantity > 0) {
            order.push({ name: item.name, quantity, price: item.price });
            total += item.price * quantity;
        }
    });

    if (order.length === 0) {
        alert("Please select at least one item.");
    } else {
          // Save order and total to localStorage
          localStorage.setItem("order", JSON.stringify(order));
          localStorage.setItem("total", total);
  
          // Redirect to order summary page
          window.location.href = "cart.html";
    }
}

// Attach event listeners to input fields for real-time calculation
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});
