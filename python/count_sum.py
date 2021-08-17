# Return an array, where the first element is the count of positives numbers and the sec
def count_positives_sum_negatives(arr):
     if not arr:
        return arr
    count = 0
    sum = 0
    for i in arr:
        
        if (i < 0 or i==0):
            sum += i
        else:
            count = count + 1
    return [count, sum]
