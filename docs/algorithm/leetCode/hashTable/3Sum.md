# 2.三数之和

## 15.三数之和

[三数之和](https://leetcode.cn/problems/3sum/)  

给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。 


```js
var threeSum = function(nums) {
 let res = [];
 nums = nums.sort((a, b) => a - b);
 for (let i = 0; i < nums.length; i++) {
    //  排序后如果第一个元素大于0，后面的都大于0，不可能找到三元组a + b + c = 0;
     if (nums[i] > 0) {
         return res;
     }

     if (i > 0 && nums[i] === nums[i - 1]) {
         continue;
     }
     let left = i + 1;
     let right = nums.length - 1;
     while (left < right) {
         if (nums[i] + nums[left] + nums[right] > 0) {
             right--
         } else if (nums[i] + nums[left] + nums[right] < 0) {
             left++;
         } else {
             res.push([nums[i], nums[left], nums[right]]);
             while (left < right && nums[left] === nums[left + 1]) left++;
             while (left < right && nums[right] === nums[right - 1]) right--;
             right--;
             left++;
         }
     }
 }
 return res;
};
```

