export const calculateHighestFrequency = (text) => {
    
    // opgezocht hoe .match te gebruiken met regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
    // https://regex101.com/r/fLdF5V/1
    let words = text.toLowerCase().match(/[a-zA-Z]+/g);
    
    // indien er geen 'sequences' gevonden worden van a-z, krijg ik null als return, heb het in een empty array gezet voor de volgende stap.
    if(words === null){
        words = [];
        return 0;
    }

    // Ik kreeg een error acc.get is not a function, oplossing gevonden op SO: 
    // https://stackoverflow.com/questions/5667888/counting-the-occurrences-frequency-of-array-elements om het in een Map() object te zetten
    let mapWords = words.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

    let obj = Object.fromEntries(mapWords);

    let arr = Object.values(obj);
    let max = Math.max(...arr);

    return max;
}

export const calculateFrequencyForWord = (text, word) => {
    let words = text.toLowerCase().match(/[a-zA-Z]+/g);
    if(words === null){
        words = [];
    }
    let freq = 0;
    let lowCase = word.toLowerCase(word);
    words.forEach((acc) => {
        if(acc === lowCase){
            freq++;
        }
    });

    return freq;
}

export const calculateMostFrequentNWords = (text, n) => {
    let words = text.toLowerCase().match(/[a-zA-Z]+/g);
    if(words === null){
        words = [];
    }

    let mapWords = words.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

    let obj = Object.fromEntries(mapWords);

    // belangrijkse referentie: https://stackoverflow.com/questions/1069666/sorting-object-property-by-values
    let sorted = [];
    for (var acc in obj) {
        sorted.push([acc, obj[acc]]);
    }

    // sorteren op alfabetische volgorde met localeCompare
    sorted.sort((a, b) => a[0].localeCompare(b[0]))
    
    // sorteren op 'descending order'
    sorted.sort(function(a, b) {

        // format ziet eruit als bv: [[a, 1], [b, 1], [c, 2]]
        // index 0 staat voor "a", en index 1 staat voor "1"
        return b[1] - a[1];
    });

    let result = sorted.slice(0, n);
    return result;
}