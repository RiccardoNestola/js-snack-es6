/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */


const peoples = [{
    name: "Mario",
    surname: "Barnetti",
    age:18,
},
{
    name: "Pino",
    surname: "Greco",
    age:19,
},
{
    name: "Riccardo",
    surname: "Rossi",
    age:46,
},
{
    name: "Luca",
    surname: "Bianchi",
    age:93,
},
{
    name: "Amanda",
    surname: "Verdi",
    age:29,
},
{
    name: "Stefano",
    surname: "Raho",
    age:8,
}];


const adults = peoples.filter((people) => {
    if(people.age >=18 ){
        return people
    } 
    return false;

});

    console.log(adults);


adults.forEach((adult) => console.log(`Nome: ${adult.name} Cognome: ${adult.surname} può guidare`));

















