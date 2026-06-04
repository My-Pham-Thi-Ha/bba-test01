// Bài 1
function createCharacters() {
    const characters = [
        { name: "My", level: 1, health: 1000 },
        { name: "Duong", level: 2, health: 300 },
        { name: "Soc", level: 1, health: 500 },
        { name: "Hoa", level: 2, health: 3400 }
    ];
    const charactersPowerUP = characters.map(character => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3
    }));
    let possibleWinners = charactersPowerUP.filter(character => character.health > 1000);
    console.log(possibleWinners);
}
createCharacters();

// Bài 2
const players = [
    { name: "Phong", score: 500 },
    { name: "Luigi", score: 900 },
    { name: "Yoshi", score: 800 },
    { name: "Peach", score: 850 },
    { name: "Mario", score: 1000 }
];
function printLeaderboard(player) {
    player.sort((a, b) => b.score - a.score);
    return player;
}
const medals = ["🥇", "🥈", "🥉"];
printLeaderboard(players).forEach(function (value, index) {
    if (index <= 2) {
        console.log(`${medals[index]} ${index + 1}. ${value.name} - ${value.score} pts`)
    }
    else {
        console.log(`   ${index + 1}. ${value.name} - ${value.score} pts`)
    }

});