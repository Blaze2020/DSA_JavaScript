class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        if k<=1:
            return 0

        product = 1
        result = 0
        left = 0

        # sliding window
        for right in range(len(nums)):
            product*=nums[right]
            # check if prod greator than equal k or not and also left <=right
            while left<=right and product>=k:
                # to reduce the product
                product/=nums[left]
                left+=1
                # to get the subarry combination
            result +=(right-left+1)
        return result
        

        