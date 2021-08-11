# "1234" --> 1234
# "605"  --> 605
# "1405" --> 1405
# "-7" --> -7
def string_to_number(s):
    return int(s)


def comp(array1, array2):
   try:
        return sorted([i ** 2 for i in array1]) == sorted(array2)
    except:
        return False
