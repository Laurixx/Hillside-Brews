import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
export const productsArray = [
    {
        name: `Latte`,
        ingredients:['2 Signature Expresso', 'Semi-skimmed milk'] ,
        size:250 ,
        picture: 'images/latte.png', 
        price: 3, 
        category: 1, 
        uuid: uuidv4(),
    },
    {
        name: `Expresso`,
        ingredients:['1 Signature Expresso'] ,
        size:30,
        picture: 'images/expresso.png', 
        price: 2.50, 
        category: 1, 
        uuid: uuidv4(),
    },
    {
        name: `Green Tea`,
        ingredients:['Green Tea'] ,
        size:250 ,
        picture: 'images/green tea.png', 
        price: 3, 
        category: 1, 
        uuid: uuidv4(),
    },
    {
        name: `Chocolate Milkshake`,
        ingredients:['3 scoups Chocolate Icecream','Whole Milk','Chocolate Topping','Wipped Cream','Cocolate flakes'] ,
        size:300,
        picture: 'images/chocolate milkshake.png', 
        price: 4.5, 
        category: 1, 
        uuid: uuidv4(),
    },
]