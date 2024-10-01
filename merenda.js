function sommaInteri(N) {
    // A voi l'onore!

    if (N === '' || N < 0) {
        return 'Invalid input';
    }

    let somma = 0;
    let contatore = 0;

    while (somma <= N) {
        contatore++;
        console.log(contatore, 'CONTATORE');
        somma += contatore;
        console.log(somma, 'SOMMA')
    }

    return contatore - 1;
}
