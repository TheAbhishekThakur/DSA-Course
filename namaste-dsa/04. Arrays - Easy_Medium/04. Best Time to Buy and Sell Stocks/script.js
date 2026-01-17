/*

Question: Best Time to Buy and Sell Stocks

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

(Note: Leetcode: 121. Best Time to Buy and Sell Stock)

*/

// Using Brute Force Approach
function maxProfit(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > profit) {
        profit = currentProfit;
      }
    }
  }
  return profit;
}
const result1 = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result1); // Output: 5

const result2 = maxProfit([7, 6, 4, 3, 1]);
console.log(result2); // Output: 0

/*
Time Complexity: O(n^2)
Space Complexity: O(1)
*/

// Using Optimized Approach
function maxProfitOptimized(prices) {
  let profit = 0;
  let min = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }

    if (profit < prices[i] - min) {
      profit = prices[i] - min;
    }
  }
  return profit;
}

const result3 = maxProfitOptimized([7, 1, 5, 3, 6, 4]);
console.log(result3); // Output: 5

const result4 = maxProfitOptimized([7, 6, 4, 3, 1]);
console.log(result4); // Output: 0

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/
