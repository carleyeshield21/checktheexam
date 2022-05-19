// This is the link of this JavaScript Challenge
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {
    arr = []

    for(i=0; i<=array1.length-1; i++){
        if(array2[i] == array1[i]){
        arr.push(4)
        } else if(array2[i] == ''){
        arr.push(0)
        } else if(array2[i] != array1[i]){
        arr.push(-1)
        }
    }
    score = arr.reduce(
            (a, b) => a + b,
        )
    if(score<=0){
        console.log(0)
    } else {
        console.log(score)
    }
}
checkExam(["a", "a", "b", "b"],["a", "c", "b", "d"])
console.log('=====')
checkExam(["a", "a", "c", "b"],["a", "a", "b",  ""])
console.log('=====')
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])
console.log('=====')
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])
console.log('=====')