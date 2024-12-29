/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, low = prices[0];
    if(prices.length <= 1) return 0;
    for(let i = 0; i < prices.length; i++) {
        if(low > prices[i]) 
            low = prices[i];
        else if((prices[i]-low) > max) 
            max = prices[i]-low;
    }
    return max;
};