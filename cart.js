let cart = [];

function addToCart(productName, price){
    cart.push({productName,price});
    updateCart();
}

function updateCart(){
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    if(cartItems ===null || totalPriceElement ===null){
        console.error('cart elements not found ')
        return;
    }

    cartItems.innerHTML = '';

    cart.forEach((item)=>{
        const li = document.createElement('li');
        li.textContent = `${item.productName} - Rs ${item.price}`
        cartItems.appendChild(li);
        totalPrice += item.price;
    })
    totalPriceElement.textContent = totalPrice;
}

document.querySelectorAll('.addTocart').forEach((button)=>{
    button.addEventListener('click',()=>{
        
        button.disabled = true;
        button.textContent = 'Added to Cart';
        console.log("button clicked")
        const productName = button.getAttribute('data-product-name');
        const price = parseFloat(button.getAttribute('data-price'))
        console.log(productName, price); 

        addToCart(productName,price)
    })
})