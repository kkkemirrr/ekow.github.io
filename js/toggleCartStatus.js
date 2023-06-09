function toggleCartStatus() {
    const cartwrapper = document.querySelector('.cart-wrapper')
    const carEmptyBage = document.querySelector('[data-cart-empty]')
    const orderForm = document.querySelector('#order-form')

    if(cartwrapper.children.length > 0){
        carEmptyBage.classList.add('none');
        orderForm.classList.remove('none')
    }else{
        carEmptyBage.classList.remove('none');
        orderForm.classList.add('none');
    }

}