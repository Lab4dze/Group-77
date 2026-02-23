def number(lines):
    res = []
    count = 1
    for i in lines:
        res.append(str(count)+ ": "+ i)
        count+=1
    return res


def digits(n):
    return len(str(n))


def only_duplicates(st):
    new_str = ""
    for i in st:
        if st.count(i) == 1:
            continue
        else:
            new_str +=i
    return new_str