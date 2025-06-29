# https://www.youtube.com/watch?v=EYeR-_1NRlQ

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        # 4sum 2-pointer approach
        nums.sort()
        n = len(nums)
        result =[]

        for i in range(n):
            # to skip duplicates
            if i>0 and nums[i]==nums[i-1]:
                continue
                # j start from next index
            for j in range(i+1,n):
                # skip duplcates
                if j>i+1 and nums[j]==nums[j-1]:
                    continue
                
                # 2-pointer approach start
                left = j+1
                right = n-1
                while left<right:
                    total = nums[i]+nums[j]+nums[left]+nums[right]
                    if target == total:
                        result.append([nums[i],nums[j],nums[left],nums[right]])
                        left+=1
                        right-=1
                        # to skip duplicates here too
                        while left < right and nums[left]==nums[left-1]:
                            left+=1
                        while left < right and nums[right]==nums[right+1]:
                            right-=1
                    elif total < target:
                        left+=1
                    else : 
                        right-=1
        return result




# another approach 


                

        