
export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];


export const renderToppings = (toppings) => {
    toppings.forEach((item) => {
        
        const nadivka = document.createElement('div')
        nadivka.classList.add('topping')
      
        nadivka.innerHTML = `            
                <h3>${item.name}</h3>
                <p>${item.price}</p> `

        nadivka.addEventListener('click', toggleTopping)

        document.body.appendChild(nadivka)

        if (item.selected) {
        nadivka.classList.add('topping--selected')
        }
        })
        
        
}

export const toggleTopping = (event) => {
    event.target.classList.toggle('topping--selected')
}





/* ostatni pokusy
export const toggleTopping = (index) => {
    toppings[index].classList.toggle('topping--selected')
} 


export const selectNadivka = (index) => {
    const vsechnyNadivky = document.querySelectorAll('.topping')
    vsechnyNadivky.classList.remove("topping--selected")
    
    const vybranaNadivka = document.querySelector(`.${index}`)
    vybranaNadivka.classList.add("topping--selected")
} */
