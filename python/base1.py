# "1234" --> 1234
# "605"  --> 605
# "1405" --> 1405
# "-7" --> -7
def string_to_number(s):
    return int(s)


def comp(array1, array2):
   return None not in (array1,array2) and [i*i for i in sorted(array1)]==sorted(array2)
