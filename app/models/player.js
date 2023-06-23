export class player {
    constructor(name, imageUrl) {
        this.name = name;
        this.score = 0;
        this.imgUrl = imageUrl
    }

    get PlayerDetails() {
        let details = `Hello my name is ${player.name} my score is ${player.score}`
        return details
    }

    get PlayerCardTemplate() {
        return `
    <div class="col-12 col-md-6">
    <div>
        <img class="img-fluid player-img"
        src="${this.imgUrl}"
        alt="${this.name}">
        <p>${this.name}</p>
        <p>Score: ${this.score}</p>
        <div>
        <button onclick="app.PlayersController.increasePlayerScore('${this.name}')">Score Goes up</button>
        </div>
    </div>
    </div>
    `
    }

}