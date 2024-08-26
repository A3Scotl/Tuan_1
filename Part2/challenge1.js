const calcAverage = (sc1, sc2, sc3) => {
    return (sc1 + sc2 + sc3) / 3;
}

const data = {
    dolphins: [85, 54, 41],
    koalas: [23, 34, 27]
};
const avgDolphins = calcAverage(...data.dolphins);
const avgKoalas = calcAverage(...data.koalas);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas)
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    else if (avgKoalas >= 2 * avgDolphins)
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    else
        console.log(`No team wins!`);
}
checkWinner(avgDolphins, avgKoalas);