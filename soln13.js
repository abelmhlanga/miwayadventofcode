//  soln1 

function solutions1(inputdata) {
  return inputdata
    .split("\n")
    .map(line => line.split(": ")
    .map(Number))
    .reduce((severity, [depth, range]) => severity + (depth % ((range - 1) * 2) === 0 ? depth * range : 0), 0);
}

function solutions2(inputdata) {
  inputdata = inputdata
    .split("\n")
    .map(line => line.split(": ")
    .map(Number));

  for (let delay = 0;; delay++) {
    if (inputdata.every(([depth, range]) => (depth + delay) % ((range - 1) * 2) !== 0)) 
    return delay;
  }
}
//debug
/* console.assert(solutions1("0: 5\n1: 2\n2: 3\n4: 4\n6: 6\n8: 4\n10: 6\n12: 10\n14: 6\n16: 8\n18: 6\n20: 9\n22: 8\n24: 8\n26: 8\n28: 12\n30: 12\n32: 8\n34: 8\n36: 12\n
38: 14\n40: 12\n42: 10\n44: 14\n46: 12\n48: 12\n50: 24\n52: 14\n54: 12\n56: 12\n8: 14\n60: 12\n62: 14\n64: 12\n66: 14\n68: 14\n72: 14\n74: 14\n80: 14\n82: 14\n86: 14\n90: 18\n92: 17")); */
