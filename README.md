# exoJsModule

Ce qui est attendu
Un module de Math 
 - sum([n, ...]) : somme des éléments du tableau 
 - isOdd(n) : true ou false si le nombre envoyé est impair
 - sumOddNumbers([n, ...]) : somme des nombres impairs
 - max([n, ...]) : renvoie le nombre le plus grand d'un tableau


Un module pour le DOM
 - getPosition(element) : renvoie un tableau avec la position x,y
 - moveTo(element, [x, y]) : déplace l'élément de x et de y 

Un module pour afficher les résultats
 display(aFunction, aFunction(n)) : 'aFunction => result' 
 display(sum, sum([2,3,4])) // sum => 9
 display(sumOddNumbers, sumOddNumbers([2,3,4,5])) // sumOddNumbers => 8
 display(getPosition, getPosition(document.querySelector('#ball'))) // getPosition => [12, 100]
