# https://leetcode.com/problems/3sum-smaller/

def threeSumSmaller(nums, target):

    # Sort the array
    nums.sort()
    count = 0
    n = len(nums)

    for start in range(n):
        # skip duplicates
        if start>0 and nums[start] == nums[start-1]:
            continue
        left = start + 1
        right = n - 1
        # 2-pointer approach
        while left < right:
            current_sum = nums[start] + nums[left] + nums[right]
            if current_sum <target:
                # If the sum is less than target, all elements between left and right will also be valid
                count += right - left
                left += 1
            else:
                # If the sum is greater than or equal to target, move the right pointer left
                right -= 1  

    return count

# Example usage
if __name__ == "__main__":
    nums = [-2, 0, 1, 3]
    target = 2
    print(threeSumSmaller(nums, target))  # Output: 2
    nums = [0, -1, 2, -3, 1]
    target = 0
    print(threeSumSmaller(nums, target))  # Output: 4 


