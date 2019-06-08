let charMap = null;

const createEmailCharMap = (emails) => {
  charMap = {};
  emails.forEach((email) => {
    const user = email.split('@')[0];
    const userCharArray = user.split('');
    userCharArray.forEach((char) => {
      if (charMap[char]) {
        const currentCount = charMap[char];
        charMap[char] = currentCount + 1;
      } else {
        charMap[char] = 1;
      }
    });
  });
};

const getCharMap = (emails, forceCreate = false) => {
  if (!charMap || forceCreate) createEmailCharMap(emails);
  return charMap;
};

export default getCharMap;
