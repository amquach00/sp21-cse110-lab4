let statistic = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (property in statistic) {
    if (property[0] == 'r') {
        console.log(property);
    } else if (statistic[property]%2 != 0 ) {
        console.log(property);
    }
}
