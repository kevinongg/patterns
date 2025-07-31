/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  // TODO
  if (typeof n !== `number` || Number.isNaN(n)) {
    return NaN;
  } else if (n === 0) {
    return Number(1);
  } else if (n < 0) {
    return undefined;
  }

  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  // TODO
  if (typeof n !== `number` || Number.isNaN(n)) {
    return null;
  } else if (n <= 0) {
    return [];
  }

  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // TODO
  if (strings.length === 0) {
    return ``;
  } else if (strings.length === 1) {
    return strings[0];
  }

  let longestStr = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longestStr.length) {
      longestStr = strings[i];
    }
  }
  return longestStr;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  // TODO
  if (attendance.length === 0) {
    return 0;
  }

  let count = 0;
  for (const students of attendance) {
    if (students) {
      count += 1;
    }
  }
  return count;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // TODO
  if (typeof dna !== `string`) {
    return null;
  } else if (dna == ``) {
    return ``;
  }

  const complements = {
    A: `T`,
    T: `A`,
    C: `G`,
    G: `C`,
  };

  let complementaryStrand = ``;
  for (let i = 0; i < dna.length; i++) {
    const singleStrand = dna[i];
    complementaryStrand += complements[singleStrand];
  }
  return complementaryStrand;
}
