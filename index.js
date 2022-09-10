function myEach(collection, alert) {
    let arr = Object.values(collection)
    for(let ele of arr) {
        alert(ele)
    }
    return collection
}
function myMap(collection, callback) {

    let arr = Object.values(collection)
    let newArr = []
    for(let ele of arr) {
        newArr.push(callback(ele))
    }
    return newArr
}

function myReduce(collection, callback, ...acc) {
    let arr = Object.values(collection)
    let newAcc;
    let i;
    let total = 0;
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }

    for(i; i<arr.length; i++) {
    newAcc = callback(newAcc, arr[i], collection)
    }
    return newAcc

}