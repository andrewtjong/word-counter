import { calculateHighestFrequency, calculateFrequencyForWord, calculateMostFrequentNWords } from './helpers/helper';

// in terminal run 'npm test'

test('testing calculateHighestFrequency', () => {
  const highestFreq = calculateHighestFrequency('The sun shines over the lake');
  expect(highestFreq).toBe(2);
});

test('testing calculateFrequencyForWord', () => {
  const highestFreq = calculateFrequencyForWord('The sun shines over the lake', 'the');
  expect(highestFreq).toBe(2);
});

test('testing calculateMostFrequentNWords', () => {
  const highestFreq = calculateMostFrequentNWords('The sun shines over the lake', 3);
  expect(highestFreq).toEqual([["the", 2], ["lake", 1], ["over", 1]]);
});
