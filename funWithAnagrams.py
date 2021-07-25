def funWithAnagrams(text):
    text_list = list(text)
    new_list = []
    anagrams = []


    if len(text) == 0:
        answer = []
    
    else:
        for word in text_list:
            if type(word) == int or type(word) == float:
                text_list.remove(word)

        if len(new_list) == 0:
            new_list.append(text_list[0])
            anagrams.append(sorted(text_list[0]))
            text_list.remove(text_list[0])

        while (len(text_list)) > 1:
            if sorted(text_list[0]) in anagrams:
                text_list.pop(0)
            else:
                anagrams.append(sorted(text_list[0]))
                new_list.append(text_list.pop(0))

        if len(text_list) == 1:
            if sorted(text_list[0]) not in anagrams:
                new_list.append(text_list[0])
        
    answer = sorted(new_list)
                
                
    print(answer)



funWithAnagrams([])
funWithAnagrams([444, "code", "aaagmnrs", 3.12, "anagrams", "doce", 444]) # => ["aaagmnrs", "code"]
funWithAnagrams(["poke", "pkoe", "okpe", "ekop"]) # => [poke]
funWithAnagrams(["code", "doce", "ecod", "framer", "frame"]) # => ["code", "frame", "framer"]
funWithAnagrams(["code", "aaagmnrs", "anagrams"]) # => ["aaagmnrs", "code"]
funWithAnagrams([4, "code","aaagmnrs", "anagrams", "doce"]) # => ["aaagmnrs", "code"]
funWithAnagrams([3, "aaa", "bbb", "ccc"]) # => ["aaa", "bbb", "ccc"]
# return a sorted string list of the FIRST anagram in the list and all other words that aren't anagrams