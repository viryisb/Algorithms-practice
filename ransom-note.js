/* Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

Example
 = "attack at dawn"  = "Attack at dawn"

The magazine has all the right words, but there is a case mismatch. The answer is .

Function Description

Complete the checkMagazine function in the editor below. It must print  if the note can be formed using the magazine, or .

checkMagazine has the following parameters:

string magazine[m]: the words in the magazine
string note[n]: the words in the ransom note
Prints

string: either  or , no return value is expected
Input Format

The first line contains two space-separated integers,  and , the numbers of words in the  and the , respectively.
The second line contains  space-separated strings, each .
The third line contains  space-separated strings, each .

Constraints

.
Each word consists of English alphabetic letters (i.e.,  to  and  to ).
Sample Input 0

6 4
give me one grand today night
give one grand today
Sample Output 0

Yes
Sample Input 1

6 5
two times three is not four
two times two is four
Sample Output 1

No
Explanation 1

'two' only occurs once in the magazine.

Sample Input 2

7 4
ive got a lovely bunch of coconuts
ive got some coconuts
Sample Output 2

No
Explanation 2

Harold's magazine is missing the word . */

function checkMagazine(magazine, note) {
  // Crear un diccionario para almacenar las palabras del periódico
  // y su cantidad en el periódico
  const magazineWords = {};

  // Recorrer las palabras del periódico y almacenarlas en el diccionario
  for (const word of magazine) {
    if (magazineWords[word]) {
      // Si la palabra ya existe en el diccionario, aumentar su cantidad en 1
      magazineWords[word] += 1;
    } else {
      // Si la palabra no existe en el diccionario, agregarla con cantidad 1
      magazineWords[word] = 1;
    }
  }

  // Recorrer las palabras de la nota de rescate y verificar si existen
  // en el diccionario y si hay suficientes en el periódico
  for (const word of note) {
    // Si la palabra no existe en el diccionario o no hay suficientes
    // en el periódico, retornar "No" y terminar la función
    if (!magazineWords[word] || magazineWords[word] === 0) {
      return 'No';
    }

    // Si la palabra existe en el diccionario, disminuir su cantidad en 1
    magazineWords[word] -= 1;
  }

  // Si todas las palabras de la nota de rescate se han encontrado en el
  // periódico y hay suficientes en el periódico, retornar "Yes"
  return 'Yes';
}

// Ejemplo 1:
console.log(
  checkMagazine(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  )
);

// Ejemplo 2:
console.log(
  checkMagazine(
    ['two', 'times', 'three', 'is', 'not', 'four'],
    ['two', 'times', 'two', 'is', 'four']
  )
);

function checkMagazine2(magazine, note) {
  // Creamos copias de los arrays originales para evitar modificarlos
  let wordsInMagazine = magazine.slice();
  let wordsInRansomNote = note.slice();

  // Creamos un objeto para contar las ocurrencias de cada palabra en el magazine
  let wordCount = {};
  wordsInMagazine.forEach((word) => {
    if (!wordCount[word]) wordCount[word] = 0;
    wordCount[word]++;
  });

  // Verificamos si todas las palabras del ransom note están en el magazine
  // y si hay suficientes ocurrencias de cada palabra
  let hasAllWords = true;
  wordsInRansomNote.forEach((word) => {
    if (!wordCount[word] || wordCount[word] === 0) {
      hasAllWords = false;
      return;
    }
    wordCount[word]--;
  });

  // Si todas las palabras están en el magazine y hay suficientes ocurrencias,
  // retornamos Yes, de lo contrario retornamos No
  if (hasAllWords) return 'Yes';
  else return 'No';
}

// Ejemplo 1:
console.log(
  checkMagazine2(
    ['give', 'me', 'one', 'grand', 'today', 'night'],
    ['give', 'one', 'grand', 'today']
  )
);

// Ejemplo 2:
console.log(
  checkMagazine2(
    ['two', 'times', 'three', 'is', 'not', 'four'],
    ['two', 'times', 'two', 'is', 'four']
  )
);
