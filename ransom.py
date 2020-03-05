def ransom_note(magazine, ransom):
    rc = {} # dict of word: count of that word in the note
    for word in ransom:
        if word not in rc:
            rc[word] = 0
        rc[word] += 1
    
    for word in magazine:
        if word in rc:
            rc[word] -= 1
            if rc[word] == 0:
                del rc[word]
                if not rc:
                    return True
    return False

    def ransom(magazine, ransom):
        d = dict()
        for word in magazine:
            if word in d:
                d[word] += 1
            else:
                dict[word] = 1

        for word in ransom:
            if not word in d:
                return False
                if d[word] == 0:
                    return False
                d[word] -= 1
            return True