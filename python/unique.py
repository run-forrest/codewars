#find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
#find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
def find_uniq(arr):
    a,b = set(arr)
    return a if arr.count(a) == 1 else b 