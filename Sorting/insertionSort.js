function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
       // console.log(arr);
    }
    return arr;
}





let arr1 = [4,8,2,1,9,6];
let res = insertionSort(arr1);
console.log(res);