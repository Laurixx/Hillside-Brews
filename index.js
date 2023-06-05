import { productsArray } from "./products.js";

const menu = document.getElementById('menu')
const basketHtml = document.getElementById('basket')

const basket = []
document.addEventListener('click', (e) => {
    if(e.target.dataset.itemId && e.target.classList.contains('add-to-basket')){
        addToBasket(e.target.dataset.itemId)
    }
    if(e.target.classList.contains('pay') || e.target.classList.contains('fa-circle-xmark')){
        basketHtml.classList.toggle('hidden')

    }
    if(e.target.dataset.itemId && e.target.classList.contains('remove-from-basket')){
        removeItem(e.target.dataset.itemId)
    }
    if (e.target.id === 'pay'){
        pay()
        e.preventDefault()
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
                    <button class="add-to-basket btx" data-item-id="${product.uuid}">+</button>
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
        <span> <i class="fa-solid fa-cart-shopping"></i>Total:</span>
        <span>${CalcTotal()}£</span>
    </div>
    <button class="pay pays">Check Out</button>
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
                    <button class="remove-from-basket bta" data-item-id="${product.uuid}">-</button>
                </div>
            </div>
        `
    })
    
    return item 
}
// payment method to the modal 

//show the basket when check out button is pressed 

function removeItem(itemId){
   const index = basket.findIndex((item) => {
       return item.uuid === itemId
    })
    if (index !== - 1){
        basket.splice(index, 1)
    }
    render()
}
function pay (){
const email = document.getElementById('email').value
const cvv = document.getElementById('cvv').value
const card = document.getElementById('card-number').value
const name = document.getElementById('name').value
if(email === '' || cvv ==='' || card ==='' || name === ''){
    const error = 'One of the fields is emplty '
    document.getElementById('err').textContent = error
    return
}else{
    document.querySelector('div.confirmation').innerHTML(`<p>Your order its on it's way ${name}</p>`)
}
// make this that somehow whem you press pay , it checks if all the inputs have been completed , and then it acts also clears the total and hides the footer
}
function render(){
    menu.innerHTML = createMenu()

    /// THIS RENDERS THE FOOTER TO THE HTML 
    const footer = document.querySelector('footer')
    footer.innerHTML = createFooter()
    //THIS ADDS AND REMOVES THE CLASS SO IT HELPS WITH THE ANNIMATION 
     if(basket.length === 0) {
         footer.classList.add(`hidden`)
     }
     else{
         footer.classList.remove('hidden')
     }
    //THIS RENDERS THE ITEMS INTO THE CHECK OUT MODAL 
    document.querySelector('div.items').innerHTML = createItemsInBasket()
    //AND THIS ADDS THE TOTAL 
    document.getElementById('check-out-total').textContent = `${CalcTotal()}£`

    if(basket.length === 0){
        basketHtml.classList.toggle('hidden')
    }
}
render()
