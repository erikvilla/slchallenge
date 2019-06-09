import stringSimilarity from 'string-similarity';

let similarityMap = null;

const createSimilarityMap = (emails) => {
  similarityMap = {};
  emails.forEach((email, index) => {
    const compareEmails = [];
    Object.assign(compareEmails, emails);
    compareEmails.splice(index, 1);
    similarityMap[email] = stringSimilarity.findBestMatch(email, compareEmails);
  });

  return similarityMap;
};

const getSimilarityMap = (emails) => {
  if (!similarityMap) createSimilarityMap(emails);
  return similarityMap;
};

export default getSimilarityMap;
