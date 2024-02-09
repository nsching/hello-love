const helloLoveLyrics = [
  'I don\'t know where you were, I don\'t know what became of us',
  'And I don\'t know what went wrong, time had turned its back on us',
  'It\'s not that I gave up, I just stopped trying',
  'I have my mind made up on no-more-crying',
  'I thought tonight would be just me, myself and I\'ing',
  'I guess I\'m not the one that\'s deciding',
  'Hello, love, all dressed up',
  'Whatchu doin\' round here? I didn\'t expect to see ya',
  'Hello, love, I got both hands up',
  'Yeah, you got me, you got me, you got me',
  'And it feels so good to see ya',
  'Hello, love',
  'Hello, love',
  'Hello, hello, love',
];

function hasLove(list) {
  return _.some(list, (str) => str.toLowerCase().includes('love'));
}

function numLoves(list) {
  const myLove = _.filter(list, (str) => str.toLowerCase().includes('love'));
  return myLove.length;
}
console.log(hasLove(helloLoveLyrics));
console.log(hasLove(helloLoveLyrics.slice(0, 4)));
console.log(numLoves(helloLoveLyrics));
console.log(numLoves(helloLoveLyrics.slice(4, 6)));
