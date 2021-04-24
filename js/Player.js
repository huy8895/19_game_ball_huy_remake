export default class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    showDialog() {
        this.name = prompt("1.Nhập tên người chơi :")
    }

    setHighScore(score) {
        this.score = score;
    }
}
