function grammarChecker(story) {
    let storyWords = story.split(' ')
    let unnecessaryWord = 'literally'
    let misspelledWord = 'beautifull'
    let badWord = 'freaking'

    storyWords = storyWords.filter(word => word != unnecessaryWord) // removes "unnecessary" word, "literally"
    storyWords = storyWords.map(word => word == misspelledWord ? "beautiful" : word) // replaces mispelled "beautifull" w/ correct spelling

    let badWordIndex = storyWords.findIndex(word => word == badWord) // finds index of "bad word", "freaking"
    storyWords[badWordIndex] = "really" // replaces "bad word" w/ "really"

    let lengthCheck = storyWords.every(word => word.length <= 10) // checks that the length of every word is 10 characters or less
    if (lengthCheck == false) {
        storyWords = storyWords.map(word => word.length > 10 ? "stunning" : word)
        // finds only word longer than 10 characters ("breathtaking") and replaces it with "stunning"
    }

    console.log(storyWords.join(' ')) // prints revised story
}

grammarChecker("Last weekend, I took literally the most beautifull bike ride of my life. The route is called 'The 9W to Nyack' and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.")

/*
Prints:

Last weekend, I took the most beautiful bike ride of my life. The route is called 'The 9W to Nyack' and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a really long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a stunning 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you cross back into New York! At this point, you are very close to the end.

*/