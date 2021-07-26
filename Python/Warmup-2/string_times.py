# Given a string and a non-negative int n, return a larger string that is n copies of the original string.


# string_times('Hi', 2) → 'HiHi'
# string_times('Hi', 3) → 'HiHiHi'
# string_times('Hi', 1) → 'Hi'


def string_times(str, n):
    s = ''
    for x in range(n):
        s += str

    return s


if __name__ == '__main__':
    print(string_times('test', 2))
