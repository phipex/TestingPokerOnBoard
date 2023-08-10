console.log('hello!');

class Result {
  winnerHandType;
  winnerHand;
  compositionWinnerHand = [];
}

function poker(hand1, hand2) {
  console.log(hand1);
  console.log(hand2);
  const result = new Result();
  result.winnerHand = 'hand1';
  result.winnerHandType = 'HighCard';
  result.compositionWinnerHand.push('As');
  return result;
}
