


// ******selectors


const main = document.getElementById("products-preview")


const amountOfProducts = document.querySelector(".amount-of-product")

const selectedProducts = document.querySelector(".main__sum-price")

// let totalAmount = 0

// ******** events


main.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("fa-minus")) {
        if(e.target.nextElementSibling.innerText > 1) {
            e.target.nextElementSibling.innerText --    

            e.target.closest(".main__product").querySelector(".main__product-line-price").innerText = (e.target.nextElementSibling.innerText * e.target.closest(".main__product-info").querySelector(".dollar").innerText).toFixed(2)  
            
        }        
    } else if (e.target.classList.contains("fa-plus")) {
        e.target.previousElementSibling.innerText ++;

        e.target.closest(".main__product").querySelector(".main__product-line-price").innerText = (e.target.previousElementSibling.innerText * e.target.closest(".main__product-info").querySelector(".dollar").innerText).toFixed(2)

    } else if (e.target.classList.contains("fa-trash-can")){
        if (confirm("are you sure???") == true){
       e.target.closest(".main__product").remove();

       amountOfProducts.innerText --
        
    }else {}
    }
    selectedProducts.innerHTML = updateAmount()
    
})

// function subTotal(position) {
//     e.target.closest(".main__product").querySelector(".main__product-line-price").innerText = (e.target.{position}.innerText * e.target.closest(".main__product-info").querySelector(".dollar").innerText).toFixed(2)
// }

function updateAmount () {
    let totalAmount = document.getElementsByClassName("main__product-line-price");
    
    let sum = 0;
    for(let i of totalAmount){
         sum += +(i.innerText); 
        
    }
    return sum.toFixed(2);
}
