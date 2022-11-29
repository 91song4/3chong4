input = 'acccdeee'


def alphabet_overlap_count(string):
    overlap_dic = {}
    for char in string:
        if char in overlap_dic:
            overlap_dic[char] += 1
        else:
            overlap_dic[char] = 1

    result = []
    for element in overlap_dic:
        overlap = element+str(overlap_dic[element])
        result.append(overlap)

    return '/'.join(result)


result = alphabet_overlap_count(input)
print(result)
