import './App.css';
import React, { useState, useEffect } from 'react';
import { calculateHighestFrequency, calculateFrequencyForWord, calculateMostFrequentNWords } from './helpers/helper';

function App() {
  const [text, setText] = useState('');
  const [highestFreq, setHighestFreq] = useState(0);

  const [wordFreq, setWordFreq] = useState('');
  const [wordFreqCount, setWordFreqCount] = useState(0);

  const [n, setN] = useState(0);
  const [mostFrequentN, setMostFrequentN] = useState([]);

  useEffect(() => {
    setHighestFreq(calculateHighestFrequency(text));
  }, [text])

  useEffect(() => {
    setWordFreqCount(calculateFrequencyForWord(text, wordFreq));
  }, [text, wordFreq]);

  useEffect(() => {
    setMostFrequentN(calculateMostFrequentNWords(text, n));
  }, [text, n]);

  return (
    <div className="App">
      <h3>Word Counter</h3>
      <textarea rows="10" onChange={(e) => setText(e.target.value)} value={text}></textarea>

      <h4>Highest Frequency</h4>
      <p>{highestFreq}</p>

      <h3>Word Freq Counter</h3>
      <input onChange={(e) => setWordFreq(e.target.value)} />

      <h4>Frequency for word "{wordFreq}"</h4>
      <p>{wordFreqCount}</p>

      <h4>Find most frequent N word</h4>
      <input onChange={(e) => setN(e.target.value)} />
      <ol>
        {mostFrequentN.map((w, idx) => {
          return (
            <li key={idx}>{w[0]}: {w[1]}</li>
          )
        })}
      </ol>
    </div>
  );
}

export default App;
