export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) {
    return;
  }
  selectionSortHelper(array, 0, array.length - 1, array.slice(), animations);

  return animations;
}

function selectionSortHelper(
  mainArray,
  startInd,
  endInd,
  auxArray,
  animations
) {
  let i, j;
  for (i = 0; i < endInd; i++) {
    for (j = i + 1; j <= endInd; j++) {
      animations.push([i, j]);
      animations.push([i, j]);

      if (auxArray[i] > auxArray[j]) {
        mainArray[i] = auxArray[j];
        mainArray[j] = auxArray[i];
        animations.push([i, auxArray[j]]);
        const temp = auxArray[j];
        auxArray[j] = auxArray[i];
        auxArray[i] = temp;
      } else {
        animations.push([i, auxArray[i]]); // to check over that if
        // to check over that if
        //its correct show them green
      }
    }
  }
}
