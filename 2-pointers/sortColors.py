# https://leetcode.com/problems/sort-colors/
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # Counting Sort 

        frequency = [0,0,0]

        for counts in nums:
            frequency[counts]+=1
        
        red, white, blue = frequency

        nums[:red]=[0]*red
        nums[red:red+white]=[1]*white
        nums[red+white:] = [2]*blue

        return nums
        # T(n) - O(n+k) some space it is using
        

def sortColors(nums):
    start = 0
    mid = 0
    end = len(nums) - 1

    while mid <= end:
        if nums[mid] == 0:
            nums[start], nums[mid] = nums[mid], nums[start]
            start += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:  # nums[mid] == 2
            nums[mid], nums[end] = nums[end], nums[mid]
            end -= 1



# Of course, Karnam! Let’s break this algorithm down like we’re sorting colored balls into buckets—super visual and intuitive.

# ---

# ### 🟥 The Problem:
# We’re given an array with only **0s, 1s, and 2s**, and we want to sort them **in-place** so that:
# ```
# All 0s come first ➜ then 1s ➜ then 2s
# ```

# ---

# ### 🧠 The Idea (Dutch National Flag Algorithm):

# Imagine you’re walking through the array with a pointer, and you have two helpers:
# - One that collects **0s** and puts them at the front
# - One that collects **2s** and puts them at the back

# What’s left in the middle must be **1s**, which are already in the right place!

# ---

# ### 🧼 Step-by-step Explanation:
# We use 3 pointers:
# - `start` — where the next 0 should go
# - `mid` — current number we’re checking
# - `end` — where the next 2 should go

# Then we loop through:

# 1. If `nums[mid]` is `0`:  
#    🔁 Swap it with `nums[start]`, move both `mid` and `start` forward.

# 2. If it's `1`:  
#    👍 It's already in the right zone → just move `mid` ahead.

# 3. If it's `2`:  
#    🔁 Swap it with `nums[end]`, and move `end` *backward*.  
#    (We don’t move `mid` yet, because the swapped number might be a 0 or 2!)

# ---

# ### 🎯 Goal:
# Keep doing this until `mid` passes `end`. By then, all the 0s, 1s, and 2s will be sitting in their rightful places.

# ---

# It’s clever because it **only scans the array once** and uses **no extra space**. Want to visualize the swapping with emojis or try it on a custom input of your choice?





# Sweet! Let’s visualize how the sorting happens using emojis as if they were little colored balls:

# We'll say:
# - `0` → ⚪ (white)
# - `1` → 🔵 (blue)
# - `2` → 🔴 (red)

# Suppose we start with:

# ```
# nums = [2, 0, 2, 1, 1, 0] → [🔴, ⚪, 🔴, 🔵, 🔵, ⚪]
# ```

# We set:
# - `start = 0`
# - `mid = 0`
# - `end = 5`

# Now we walk through it:

# ---

# **Step 1**  
# `nums[mid] = 🔴` → Swap with `nums[end]`  
# Result: `[⚪, 0, 🔴, 🔵, 🔵, 🔴]` → `[⚪, ⚪, 🔴, 🔵, 🔵, 🔴]`  
# Now `end = 4` (don't move `mid` yet)

# ---

# **Step 2**  
# `nums[mid] = ⚪` → Swap with `nums[start]`  
# No change visually, but `start = 1`, `mid = 1`

# ---

# **Step 3**  
# `nums[mid] = ⚪` → Another swap (again, no visible change)  
# Now `start = 2`, `mid = 2`

# ---

# **Step 4**  
# `nums[mid] = 🔴` → Swap with `nums[end]`  
# Result: `[⚪, ⚪, 🔵, 🔵, 🔴, 🔴]`  
# `end = 3` (again, don't move `mid` yet)

# ---

# **Step 5**  
# `nums[mid] = 🔵` → It's a 1, so we just move `mid = 3`

# **Step 6**  
# `nums[mid] = 🔵` → Move `mid = 4`  
# Since `mid > end`, we're done!

# Final sorted array:
# ```
# [⚪, ⚪, 🔵, 🔵, 🔴, 🔴] → [0, 0, 1, 1, 2, 2]
# ```

# ---

# Pretty fun way to see the algorithm in action, right? Want to test it on a custom emoji sequence or tweak it for a wider range like 0 to 4?
