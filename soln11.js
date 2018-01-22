// soln1

function soln1(input) {
	//x, y , z
  return input
    .split(",")
    .reduce(([x, y, z], move) => {
      if (move === "n") 
		  return [x, y + 1, z - 1];
	  
      if (move === "s") 
		  return [x, y - 1, z + 1];
	  
      if (move === "ne")
		  return [x + 1, y, z - 1];
	  
      if (move === "se") 
		  return [x + 1, y - 1, z];
	  
      if (move === "nw") 
		  return [x - 1, y + 1, z];
      if (move === "sw") 
		  return [x - 1, y, z + 1];
    }, [0, 0, 0])
    .reduce((distance, coordinates) => Math.max(distance, Math.abs(coordinates)), 0);
}

// soln2

function soln2(input) {
  input = input.split(",");

  let x = 0;
  let y = 0;
  let z = 0;

  return input.reduce((maxDistance, move) => {

    if (move === "n") {
      y++;
      z--;
    } 
	else if (move === "s") {
      y--;
      z++;
    } 
	else if (move === "ne") {
      x++;
      z--;
    }
	else if (move === "se") {
      y--;
      x++;
    } 
	else if (move === "nw") {
      x--;
      y++;
    }
	else if (move === "sw") {
      x--;
      z++;
    }

    return Math.max(maxDistance, Math.max(Math.abs(x), Math.abs(y), Math.abs(z)));
	
  }, 0);
}
