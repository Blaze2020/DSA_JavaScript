# https://leetcode.com/problems/backspace-string-compare/?source=submission-noac

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def check_backspace(string):
            stack = []
            for char in string:
                if char=='#':
                    if stack:
                        stack.pop()
                else:
                    stack.append(char)
            return ''.join(stack)




        if check_backspace(s)!=check_backspace(t):
            return False
        return True
    



# approach 2 with O(1)

class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def check_backspace(string,index):
            backspace = 0
            while index>=0:
                if backspace==0 and string[index]!='#':
                    break
                elif string[index]=='#':
                    backspace+=1
                else:
                    backspace-=1 
                index-=1
            return index
        


        # looping start
        i_s, i_t = len(s)-1, len(t)-1

        while i_s >=0 or i_t>=0:

            # to check next char or skip when encounter # char
            i_s = check_backspace(s,i_s)
            i_t = check_backspace(t,i_t)

            char_s = s[i_s] if i_s >=0 else ""
            char_t = t[i_t] if i_t >=0 else ""

            if char_s!=char_t:
                return False
            
            # decrement the index
            i_s-=1
            i_t-=1

        return True







   
   
   
    Awesome — here's the full code implementing the optimal two-pointer approach for this problem, followed by a walkthrough of the logic we dry ran with arr = [1, 2, 3, 10, 4, 2, 3, 5].



arr = [1, 2, 3, 10, 4, 2, 3, 5]
left = 3      # [1, 2, 3, 10]
right = 5     # [2, 3, 5]



✅ Python Code
class Solution:
    def findLengthOfShortestSubarray(self, arr):
        n = len(arr)
        
        # Step 1: find longest non-decreasing prefix
        left = 0
        while left + 1 < n and arr[left] <= arr[left + 1]:
            left += 1
        if left == n - 1:
            return 0  # array is fully sorted

        # Step 2: find longest non-decreasing suffix
        right = n - 1
        while right > 0 and arr[right - 1] <= arr[right]:
            right -= 1

        # Step 3: possible answer = removing either left or right side
        ans = min(n - left - 1, right)

        # Step 4: try merging prefix and suffix
        i = 0
        j = right
        while i <= left and j < n:
            if arr[i] <= arr[j]:
                ans = min(ans, j - i - 1)
                i += 1
            else:
                j += 1

        return ans



🔍 Dry Run Recap (for arr = [1,2,3,10,4,2,3,5])
- Prefix: 1,2,3,10 → ends at index 3
- Suffix: 2,3,5 → starts at index 5
- Try merging:
- Compare arr[i] from prefix with arr[j] from suffix
- When arr[i] <= arr[j], you can remove the subarray between i and j (exclusive)
- Best case found: removing arr[3..5] = [10,4,2], length 3
✅ Final Answer: 3

Let me know if you want to try this with some custom arrays, or I can rewrite this in a backend-ready JavaScript version with a Node-style function signature. Want to explore that next?
        

        
        
        



        


