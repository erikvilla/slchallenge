import stringSimilarity from 'string-similarity';
import levenSort from 'leven-sort';

let similarityMap = null;
const SIMILARITY_TRESHOLD = 0.7;

const createSimilarityMap = (emails) => {
  if (emails.length === 1) return similarityMap;
  if (similarityMap === null) similarityMap = {};

  const start = emails[0];
  emails.splice(0, 1);

  const levSorted = levenSort(emails, start);

  for (let i = 0; i < levSorted.length; i += 1) {
    const rating = stringSimilarity.compareTwoStrings(start, levSorted[i]);
    if (rating < SIMILARITY_TRESHOLD) break;
    if (!similarityMap[start]) similarityMap[start] = [];
    similarityMap[start].push(levSorted[i]);
    const indexToRemove = emails.indexOf(levSorted[i]);
    emails.splice(indexToRemove, 1);
  }

  return createSimilarityMap(emails);
};

const getSimilarityMap = (emails) => {
  if (!similarityMap) createSimilarityMap(emails);
  return similarityMap;
};

export default getSimilarityMap;
