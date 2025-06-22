# https://leetcode.com/problems/excel-sheet-column-number/

class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        s=columnTitle
        n = len(columnTitle)
        result= 0
        mulfactor = 1

        for i in range(n-1,-1,-1):
            result += (ord(s[i])-64)*mulfactor
            mulfactor*=26
        return result





        