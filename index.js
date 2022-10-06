// Write your code here

function multiply(){
    const num1 = 31
    const num2 = 2
    return num1 * num2
}
function random(){
    return Math.random()
}
function mod(){
    const num3 = 24
    const num4 = 5
    return num3 % num4
}


const array = [1,3,20,5]
function max(array){
    let highest = 0
    for(let i = 0; i<array.length; i++){
        if(array[i]<array[i+1]){
            highest = array[i+1]
        }
    }
    return highest
}


console.log(max(array))