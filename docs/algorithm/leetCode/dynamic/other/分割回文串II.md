# 分割回文串II

[链接](https://leetcode.cn/problems/palindrome-partitioning-ii/description/)  

给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文。  

返回符合要求的 最少分割次数 。    



看到这种求极值的问题应该不难想到dp   

dp[i]dp[i]dp[i] ：索引 0 到 i 的子串 [0,i][0,i][0,i] 的最小分割数  

题目求：dp[n−1]dp[n-1]dp[n−1] , n 为字符串 s 的长度  

base case 是什么？如果 [0,i][0,i][0,i] 就是回文串，不用切割，此时 dp[i]=0dp[i] = 0dp[i]=0  

dp[i]dp[i]dp[i] 对应的子串长度为 i+1i+1i+1，最多能被分割 iii 次 所以我们初始化 dp[i]=idp[i] = idp[i]=i，包含了 base case：dp[0]=0dp[0] = 0dp[0]=0   

找出状态转移方程  
我们尝试将子问题拆成规模小一点的子问题，找到它们之间的联系。  

dp[i]dp[i]dp[i] 表示 [0,i][0,i][0,i] 的最小分割数，我们用指针 j 去切分一下 [0,i][0,i][0,i]，切一个规模小一点的 dp 子问题出来。  

分成了两部分：[0,j][0,j][0,j] 和 [j+1,i][j+1,i][j+1,i]，其中 [0,j][0,j][0,j] 的最小分割数是 dp[j]dp[j]dp[j]，它相对于 dp[i]dp[i]dp[i] 是计算过的状态，我们要找出 dp[i]dp[i]dp[i] 和 dp[j]dp[j]dp[j] 的递推关系。 

对于 [j+1,i][j+1,i][j+1,i]，如果它是回文串，就有递推关系：dp[i]=dp[j]+1dp[i] = dp[j] + 1dp[i]=dp[j]+1  

因为 j 指针是在扫 [0,i][0,i][0,i]，j 在变，它切的 [j+1,i][j+1,i][j+1,i] 如果多次是回文串，dp[i]dp[i]dp[i] 取最小的 dp[j]+1dp[j]+1dp[j]+1 就好 
 
两次 DP  
因为我们需要判断 [j+1,i][j+1,i][j+1,i] 子串是否回文，就用到昨天的131题的 dp 解法：  
 
用的 dp 二维数组存放每个 [i,j][i,j][i,j] 子串是否回文。所以这道题用了两次 dp，但两次都不复杂。  



```js
var minCut = function(s) {
    const n = s.length;
    const isPali = new Array(n);
    for (let i = 0; i < n; i++) {
        isPali[i] = new Array(n);
    }                            
    for (let j = 0; j < n; j++) {
        for (let i = 0; i <= j; i++) {
            if (i === j) {
                isPali[i][j] = true;
            } else if (j - i == 1 && s[i] == s[j]) {
                isPali[i][j] = true;
            } else if (j - i > 1 && s[i] == s[j] && isPali[i + 1][j - 1]) {
                isPali[i][j] = true;
            } else {
                isPali[i][j] = false;
            }
        } 
    }    
    const dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = i;
    }    
    for (let i = 0; i < n; i++) {
        if (isPali[0][i]) {
            dp[i] = 0;
            continue;
        }
        for (let j = 0; j < i; j++) {
            if (isPali[j + 1][i]) {
            dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[n - 1];
};
```