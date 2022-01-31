// const array = [1, 2, 3, 4, 5, 6, 7, 8];
//
// // Дан массив с numbers внутри. Вам необходимо написать функцию, которая выведет
// // только четные элементы данного массива по очереди.
//
// let odd = array =>{
//
//     for(let i = 0 ; i < array.length; i ++){
//         if(array[i] % 2 == 0){
//             console.log(array[i])
//         }
//
//     }
//
// }
//
// console.log(odd(array))
const a = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' };
const b = { 'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye'};

let fire =  obj => {
    
    let arr = Object.values(obj);

    if(arr.includes('nay')){
        return 'not'
    }else {
        return 'fire!!'
    }
}

console.log(fire(a));
console.log(fire(b))
