function wordCounter(text) {
    const lowertext = text.toLowerCase();
    const wordMap = {};
    const words = lowertext.split(/\s+/);


    for (const word of words) {
        if (word in wordMap) {
            wordMap[word]++;
        } else {
            wordMap[word] = 1;
        }
    }
    return wordMap;
}
const text = "Hey there ! I think you know me";
 const res = wordCounter(text);
 console.log(res);