




let allproducts = [];

function num() {
    let number = document.getElementById('product').value
    // console.log(number);
    if(number.trim()=== '') {
        alert('kindly fill in the input')
    } else {
        console.log(number); 
        allproducts.push(number)
        console.log(allproducts); 
        document.getElementById('product').value =''
        displayItems()
    }
    
}

const deleteItem = (index) => {
    // alert('yes')
    allproducts.splice(index, 1)
    displayItems()
}

let editItem = (index) => {
    let newValue = prompt('Enter new value', allproducts[index])
    if (newValue !== null) {
        allproducts[index] = newValue
        displayItems()
    }
}

    function displayItems() {
        show.innerHTML = ''
        for (let i=0; i <allproducts.length; i++) {
            show.innerHTML += `<p>${i +1}. ${allproducts[i]}</p>
            <button onclick="deleteItem(${i})">Delete</button>
            <button onclick="editItem(${i})">Edit</button> <br>
            `
        }
        if(allproducts.length <= 1) {
            show.innerHTML += `<small> You have ${allproducts.length} item</small>`
        } else {
            show.innerHTML += `<small> You have ${allproducts.length} items</small>`
        }
    }