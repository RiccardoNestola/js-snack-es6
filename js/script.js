
/* 1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli. */

const studente = {
    Nome: "Stefano",
    Cognone: "Rossi",
    eta: 34

}

for (let key in studente) {

    console. log (key, ' => ' , studente[key]);

}


const studenti = [
    {
        Nome: "Stefano",
        Cognone: "Rossi",
        eta: 34
    },
    {
        Nome: "Antonio",
        Cognone: "Rossi",
        eta: 24
    },
    {
        Nome: "Stefano",
        Cognone: "Bianchi",
        eta: 57
    }
    
    ]


    for (let key in studenti) {

        console. log (key, ' => ' , studenti[key]);
    
    }


