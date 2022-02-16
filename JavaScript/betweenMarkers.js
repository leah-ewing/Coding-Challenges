/*

Given a string and two markers (the initial and final), find a substring enclosed between these two markers. 

Important conditions:
- The initial and final markers are always different.
- If there is no initial marker, then the first character should be considered the beginning of a string.
- If there is no final marker, then the last character should be considered the ending of a string.
- If the initial and final markers are missing then simply return the whole string.
- If the final marker comes before the initial marker, then return an empty string.

Input: Three arguments. All strings. The second and third arguments are the initial and final markers.
Output: A string.

Precondition: can't be more than one final marker and can't be more than one initial. Marker can't be an empty string

*/

function betweenMarkers(text, begin, end) {
    const newBegin = "[";
    const newEnd = "]";
    const originalText = text;
    let betweenList = [];
    
    text = text.replace(begin, newBegin);
    text = text.replace(end, newEnd);

    textList = [];

    for (i = 0; i < text.length; i++) {
        textList.push(text[i]);
    }

    if (textList.includes(newBegin) && textList.includes(newEnd)) {
        if (textList.indexOf(newBegin) > textList.indexOf(newEnd)) {
            console.log("");
        } else {
            for (j = textList.indexOf(newBegin) + 1; j < textList.indexOf(newEnd); j++) {
                betweenList.push(textList[j]);
            } 
        } let betweenString = betweenList.join("");
    } else {
        if (textList.includes(newBegin)) {
            for (k = textList.indexOf(newBegin); k < textList.length; k++) {
                betweenList.push(textList[k]);
            } console.log(betweenList.join(""));
        } else if (textList.includes(newEnd)) {
            for (l = 0; l < textList.indexOf(newEnd); l++) {
                betweenList.push(textList[l]);
            } console.log(betweenList.join(""));
        } else if (textList.includes(newBegin) == false && textList.includes(newEnd) == false) {
            console.log(originalText);
        }
    }
};

betweenMarkers('What is >apple<', '>', '<'); // apple
betweenMarkers('No[/b] hi', '[b]', '[/b]'); // No
betweenMarkers("<head><title>My new site</title></head>", "<title>", "</title>"); // My new site
betweenMarkers('No [b]hi', '[b]', '[/b]'); // hi
betweenMarkers('No hi', '[b]', '[/b]'); // No hi
betweenMarkers('No <hi>', '>', '<'); // ""
