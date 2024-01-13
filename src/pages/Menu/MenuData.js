const MenuData = {
    getAllDishes: () => {
        return [
            {
                id: 1,
                name: "Spaghetti Carbonara",
                description: "Creamy pasta with bacon and eggs.",
                image: "assets/images/pic1.png",
                price: 12.95,
            },
            {
                id: 2,
                name: "Margherita Pizza",
                description: "Classic Italian pizza with tomato and mozzarella.",
                image: "assets/images/pic2.png",
                price: 9.00,
            },
            {
                id: 3,
                name: "Chicken Alfredo",
                description: "Fettuccine Alfredo with grilled chicken.",
                image: "assets/images/pic3.png",
                price: 14.00,
            },
            {
                id: 4,
                name: "Caesar Salad",
                description: "Crispy romaine lettuce with Caesar dressing.",
                image: "assets/images/pic4.png",
                price: 8.50,
            },
            {
                id: 5,
                name: "Sushi Platter",
                description: "Assorted sushi rolls and sashimi.",
                image: "assets/images/pic5.png",
                price: 19.50,
            },
            {
                id: 6,
                name: "Burger and Fries",
                description: "Classic beef burger with a side of crispy fries.",
                image: "assets/images/pic6.png",
                price: 10.00,
            },
            {
                id: 7,
                name: "Veggie Wrap",
                description: "Healthy vegetable wrap with hummus.",
                image: "assets/images/pic7.png",
                price: 7.50,
            },
            {
                id: 8,
                name: "Chocolate Cake",
                description: "Decadent chocolate cake with a rich ganache.",
                image: "assets/images/pic8.png",
                price: 6.80,
            },
        ];
    },
    getDishById: (dishId) => {
        const dishes = MenuData.getAllDishes();
        return dishes.find((dish) => dish.id === dishId);
    },
};

export default MenuData;
