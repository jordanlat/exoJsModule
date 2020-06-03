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
    console.log('nombre pair');
  } else if (nbr != 0) {
    console.log('nombre impair');
  }
};

// sommes des nbrs impairs
/*
const sumOddNumbers = (array)=>{
    
};
*/
// renvoie le nombre le plus grand
/*
const max = (array)=>{
    


    return 
};
*/




