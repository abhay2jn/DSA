function bubbleSort(arr) {
    for( let i  = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                //console.log(arr);
            }
        }
    }
    return arr;
}


const myArr = [4, 2, 10 , 8 , 7];

const res = bubbleSort(myArr);
console.log(res);