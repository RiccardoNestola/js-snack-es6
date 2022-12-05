
    /**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

    
   let zucchine = [

    {
    varieta: 'verde',
    peso: 2,
    lunghezza: '4'
    },

    {
        varieta: 'gialla',
        peso: 4,
        lunghezza: '4'
        },

        {
            varieta: 'rossa',
            peso: 5,
            lunghezza: '4'
            },

            {
                varieta: 'verde',
                peso: 7,
                lunghezza: '4'
                },

                {
                    varieta: 'verde',
                    peso: 9,
                    lunghezza: '4'
                    },

                    {
                        varieta: 'verde',
                        peso: 5,
                        lunghezza: '4'
                        },

                        {
                            varieta: 'verde',
                            peso: 2,
                            lunghezza: '4'
                            },

                            {
                                varieta: 'verde',
                                peso: 2,
                                lunghezza: '4'
                                },

                                {
                                    varieta: 'verde',
                                    peso: 2,
                                    lunghezza: '4'
                                    },

                                    {
                                        varieta: 'verde',
                                        peso: 8,
                                        lunghezza: '4'
                                        },

            
        ];


        let somma = 0;

        for (let i = 0; i < zucchine.length; i++) {
        console.log( somma += zucchine[i].peso); 
        
    }
        