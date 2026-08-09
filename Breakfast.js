let getAllproduct =[]
function Break(){
    const fast = document.getElementById('breakfast').value  
if(fast === ''){
    alert('Don`t leave an empty space')
}else {
        console.log(fast); 
        getAllproduct.push(fast)
        console.log(getAllproduct); 
        document.getElementById('breakfast').value =''
        displayProduct()

}      

}

function displayProduct (){
    results.innerHTML =''
    for (let i=0; i <getAllproduct.length; i++) {
            results.innerHTML += `<p>${i +1}. ${getAllproduct[i]}</p> 
            <button onclick="deleteItem()">Delete</button>
            <button onclick="editItem()">Edit</button> <br>
            `
        }
        if(getAllproduct.length == 1) {
            results.innerHTML += `<p> You have ${getAllproduct.length} item</p>`
        }else {
            results.innerHTML += `<p> You have ${getAllproduct.length} items</p>`
        }
}