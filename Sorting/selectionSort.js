function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i; 
        for( let j = i +1 ; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
           // console.log(arr);
        }
    }
    return arr;
}

let arr1 = [2,7,4,8,1,10];
let res = selectionSort(arr1);
console.log(res);