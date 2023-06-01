import { productsArray } from "./products.js";

const menu = document.getElementById('menu')
const basket = []
document.addEventListener('click', (e) => {
    if(e.target.dataset.itemId){
        addToBasket(e.target.dataset.itemId)
    }
    if(e.target.classList.contains('pay')){
        createItemsInBasket()
    }
})

function createMenu (){
    let item  = ``
    let menuHtml = ``
    productsArray.forEach((product) => {

         item += `
        <div class="wrapper">
            <div class="div1">
                <div class="avatar"><img src="${product.picture}" alt=""></div>
                    <div class="name-ingredients">
                        <span class="name">${product.name}</span>
                        <div class="ingredients">${product.ingredients}</div>
                    </div>
            </div>
                <div class="div2">
                    <div class="price">${product.price}£</div>
                    <button class="add-to-basket" data-item-id="${product.uuid}">+</button>
                </div>
        </div>

        `
    })
    menuHtml += item
    return menuHtml
}
function addToBasket (productId){

    const targetProduct = productsArray.find((product) => {
        return product.uuid === productId
    })
    basket.unshift(targetProduct)
    render()
}
function createFooter(){
    let footerhtml = `
    <div class="total">
        <span>Total:</span>
        <span>${CalcTotal()}£</span>
    </div>
    <button class="pay">Check Out</button>
    `
    return footerhtml
}
function CalcTotal (itemId){
    let totalPrice = 0
    basket.forEach((product) =>{
        totalPrice += product.price
    }) 
    return totalPrice
 
}
function createItemsInBasket (){
        let item = ``
    if(basket.length >= 1)
    basket.forEach((product) => {
        item += `
    
            <div class="wrapper">
            <div class="div1">
                    <div class="name-ingredients">
                        <span class="name">${product.name}</span>
                    </div>
            </div>
                <div class="div2">
                    <div class="price">${product.price}£</div>
                    <button class="remove-from-basket" data-item-id="${product.uuid}"></button>
                </div>
            </div>
        
            <span class="total">£</span>

        `
    })
    return item 
}
function render(){
    menu.innerHTML = createMenu()
    const footer = document.querySelector('footer')
    footer.innerHTML = createFooter()

    if(basket.length === 0) {
        footer.classList.add(`hidden`)
    }
    else{
        footer.classList.remove('hidden')
    }
    
}
render()
