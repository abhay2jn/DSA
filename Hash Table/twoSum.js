function twoSum(nums,target) {
    const numMap = {};
    for( let i = 0; i < nums.length; i++) {
        const ans = target - nums[i];
        if (ans in numMap && numMap[ans] !== i) {
            return [numMap[ans],i];
        }
        numMap[nums[i]] = i;
    }
    return undefined;
}
const nums = [2,9,6,9];
const target = 15;
const res  = twoSum(nums,target);
console.log(res);