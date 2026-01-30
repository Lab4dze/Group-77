def is_valid_walk(walk):
    nn=[]
    ss=[]
    ww=[]
    ee=[]
    if len(walk) > 10:
        return False
    elif len(walk) < 10:
        return False
    else:
        for i in walk:
            if i == "n":
                nn.append(i)
            elif i == 's':
                ss.append(i)
            elif i == 'w':
                ww.append(i)
            elif i == 'e':
                ee.append(i)
    return len(nn) == len(ss) and len(ww) == len(ee) 