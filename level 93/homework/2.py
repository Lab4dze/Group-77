def only_duplicates(st):
    new_str = ""
    for i in st:
        if st.count(i) == 1:
            continue
        else:
            new_str +=i
    return new_str


def solution(s):
    lst=[]
    for i in s:
        if i == i.upper():
            lst.append(' ')
        lst.append(i)
    return "".join(lst)