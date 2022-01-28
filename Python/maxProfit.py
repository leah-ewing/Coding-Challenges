"""

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


>>> maxProfit([7,1,5,3,6,4])
5

>>> maxProfit([7,6,4,3,1])
0

"""

def maxProfit(prices):
    # smallest = min(prices)
    # biggest = max(prices)
    smallest = 0
    biggest = 0
    answer = None
    i = 1

    if prices[::-1] == sorted(prices):
        answer = 0

    # while answer == None:
    #     if prices.index(smallest) > prices.index(biggest):
    #         prices.pop(prices.index(biggest))
    #         biggest = max(prices)
    #     if prices.index(smallest) < prices.index(biggest):
    #         answer = biggest - smallest

    # print(answer)
    else:
        while i < len(prices):
            if prices[i - 1] < prices[i]:
                smallest = prices[i - 1]
                biggest = prices[i]
                i += 1
                # break
            if prices[i - 1] > prices[i]:
                smallest = prices[i]
                biggest = prices[i - 1]
                # break
            if prices[i]

    print(f'smallest: {smallest}, biggest: {biggest}, i: {i}')
    print(answer)




maxProfit([7,1,5,3,6,4]) # => 5
print('-'*10)
maxProfit([7,6,4,3,1]) # => 0
print('-'*10)
maxProfit([2,4,1]) # => 2

