export default (sourceMap) => {
  const mapKeys = Object.keys(sourceMap);
  const mapArray = [];
  for (let i = 0; i < mapKeys.length; i += 1) {
    mapArray.push([mapKeys[i], sourceMap[mapKeys[i]]]);
  }
  return mapArray;
};
