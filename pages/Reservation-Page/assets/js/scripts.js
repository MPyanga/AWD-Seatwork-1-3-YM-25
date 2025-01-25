// const seats = 

document.getElementById('price').innerText = 390;

function submit(){
    const Quantity = document.getElementById('Quantity').value;
    const seats = document.getElementById('seats');
    const output = document.getElementById('output');
    let currentSeats = parseInt(seats.innerText);
    let currentPrice = parseInt(price.innerText);
    const hiddenElement = document.getElementById('confirmation');

    if (Quantity <= 10) {
        currentSeats -= Quantity;
        seats.innerText = currentSeats;
        currentPrice *= Quantity;
        output.innerText = currentPrice;   
        Quantity.innerHTML = '';  
        hiddenElement.style.visibility = "visible"; 
    }  
        else{
            alert('incomplete');
        }

        document.getElementById('Quantity').value = '';
    }
    
//     if (Quantity <=10) {
//         output.innerText = `${Quantity * 390}`;
//     }
//     else{
//         alert('incomplete');
//     }
    
// }


        // if (input > 100){
        //     alert('You\'ve reached the maximum limit');
        // }
        // else if (input <= 0){
        //     alert('invalid input');
    
        // }
        // else{
        //     output.innerHTML = ''; 
            
        //         for (let i = 0; i < parseInt(input); i++) {
        //         const newIcon = document.createElement('i');
        //         newIcon.className = 'fa-solid fa-basketball'; 
        //         output.appendChild(newIcon);
        //     }
        // }

    