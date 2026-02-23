def title_case(title, minor_words = ""):
    if title in (" ", ""):
        return ""
    
    ltitle = title.lower().split()
    minor_words_list = minor_words.lower().split()
    final_title = []

    # First Word
    final_title.append(ltitle[0].capitalize())

    #Remaing Words
    for word in ltitle[1:]:
        if word in minor_words_list:
            final_title.append(word)
        else:
            final_title.append(word.capitalize())
    
    return " ".join(final_title)