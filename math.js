// sommes des éléments du tableau
export function sum(array) {

    let nbr = 0;

    array.forEach(element => {
        nbr = nbr + element;
    });

    return nbr;
};


// Si pair return true , si impair return false
export function isOdd(n) {
  const nbr = n%2;
  if (nbr == 0) {
    return 0
  } else if (nbr != 0) {
    return n
  }
};

// sommes des nbrs impairs

export function sumOddNumvers(array) {
   return array.reduce((acc, cur) => acc+ isOdd(cur) ,0); 
};


// renvoie le nombre le plus grand
export function sumOddNumvers(array) {
    


    return 
};




