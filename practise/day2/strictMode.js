const calcAverage = (s1,s2,s3) => (s1+s2+s3) / 3;


const checkWinner = function (s1,s2,s3) {
    const avgDol = calcAverage(85,54,41);
    const avgkol = calcAverage(23,34,27);
     if (avgDol > 2*avgkol){
        console.log('Dol is winner!');
    }else if(avgkol > 2*avgDol) {
        console.log('Kol is winner!');
    }else {
        console.log('No one qualigied!');
    }
}
checkWinner()