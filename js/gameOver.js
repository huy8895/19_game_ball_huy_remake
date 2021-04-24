export default function gameOver() {
    document.getElementById('gameBoard').innerHTML = '<h1 style="margin-top: 220px;" > GAME OVER </h1>' +
        '<button onclick="document.location.reload()">replay</button>'
}
