const mySkyscraper = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];

function findCrystalBallHeight (skyscraper) {
  console.log('@skyscraper.length=', skyscraper.length);
  if (!skyscraper[skyscraper.length -1]) {
    return -1;
  }
  const scrRootOfHeight = Math.floor(skyscraper.length ** 0.5);
  let pointer = scrRootOfHeight;
  for (; pointer < skyscraper.length; pointer += scrRootOfHeight) {
    console.log('@first loop pointer=', pointer);
    if (skyscraper[pointer]) {
      break;
    }
  }
  pointer -= scrRootOfHeight;
  console.log('@rear drive pointer=', pointer);
  for (let step=0; step < scrRootOfHeight && pointer < skyscraper.length; step++ ) {
    pointer++;
    console.log('@second loop pointer=', pointer);
    if (skyscraper[pointer]) {
      return pointer;
    }
  }
  return -1;
}

console.log(findCrystalBallHeight(mySkyscraper));