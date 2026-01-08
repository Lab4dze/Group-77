def is_valid_IP(s):
    some = s.split(".")
    if len(some) != 4:
        return False
    for i in some:
        if not i.isdigit():
            return False
        if i != "0" and i.startswith("0"):
            return False
        num = int(i)
        if num < 0 or num > 255:
            return False
    return True