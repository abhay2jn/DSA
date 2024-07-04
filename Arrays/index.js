
let studentNames = ["Abhay","Chandan","Shivam","Pankaj","Veshali"];

function student(allstudents,studentName) {
    for (let i = 0; i < allstudents.length; i++) {
        if (allstudents[i] === studentName) {
            console.log(`found ${studentName}`);
        }
    }
}
    student(studentNames,"Abhay");



//2. Pair
let no = [1,2,4,8];
function pair(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`pair: ${arr[i]}: ${arr[j]} `);
        }
    }
}
pair(no);

//3. Mixed Array
const mixed = ["A",2,"T",{inshort :  "AT"},["ABTA"]];
console.log(mixed);

//4.Creating my Own Custom Array
class MyArray {
    constructor() {
        this.value = 0;
        this.any = {};
    }
    push(item) {
        this.any[this.value] = item;
        this.value++;
        return this.value;
    }
    get(index) {
        return this.any[index]
    }
    pop() {                    //remove item from array
        const lItem = this.any[this.value];
        delete this.any[this.value -1];
        this.value--;
        return lItem;
    }
    delete(index) {
        const item = this.any[index];
        for(let i = index; i < this.value -1; i++) {
            this.any[i] = this.any[i + 1];
        }
        delete this.any[this.value -3];
        this.value--;
        return item;
    }
}
const myarray = new MyArray();
myarray.push("ABTAN");
myarray.push("ABHTAN");
myarray.push("ABHATAN");
myarray.push("ABHAYTAN");
myarray.push("ABHAYTANY");
// myarray.pop();
// console.log(myarray.get(3));
console.log(myarray.delete(2));
console.log(myarray);


//5.Reverse String && Palindrome
const reverseString = (str) => str.split("").reverse().join("") === str;
console.log(reverseString("Abhay"));

//6. Int Reverse && Palindrome
const intReversal = (int) => {
    const reverse = int.toString().split("").reverse().join("");
    return parseInt(reverse) * Math.sign(int) === int;
}
console.log(intReversal(212));

//7.Sentence Capitalization
const capitalize = (str) => {
    return str.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join("");
}
console.log(capitalize("abhay"));
// 8.FizzBuzz
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz(22);


//9. Max Profit
function maxProfit(price) {
    let minPrice = price[0];
    let maxProfit = 0 ;
    for (let i = 0;i < price.length; i++ ) {
        const currentPrice = price[i];
        minPrice = Math.min(minPrice,currentPrice);
        const potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit,potentialProfit);
        console.log(maxProfit);
    }
    return maxProfit;
}
const price = [7,1,5,3,2,4];
const profit = maxProfit(price);
console.log("Maximum Profit :",profit);

//10. Array and Size
function chunk(array,Size) {
    let chunked  = [];
    let index = 0;
    while(index < array.length) {
        const chunk = array.slice(index,index + Size);
        console.log(chunk);
        chunked.push(chunk);
        index += Size;
    }
    return chunked;
}
console.log(chunk([2,2,2,2,2,2,2,2,2,"YOU","TO"],2));

//11. Two Sum
function twoSum(nums,target) {
    for(i = 0; i < nums.length; i++) {
        for(j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
    return [];
}
const res = twoSum([2,2,2,2,2],4);
console.log(res);