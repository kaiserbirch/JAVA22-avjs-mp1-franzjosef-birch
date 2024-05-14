import {getAllHighScore, updateHighScore} from "./highscoreRepository";

export class HighScore{
    highScore;

    async initHighScore(){
        this.highScore = await getAllHighScore();
    }
    async addHighScoreEntry(highScoreEntry) {
        if (highScoreEntry.score >= this.highScore[this.highScore.length - 1].score) {
            this.highScore = [...this.highScore, highScoreEntry].toSorted((a, b) => b.score - a.score).splice(0, 5);
            updateHighScore(this.highScore);
        }

    }

}
class HighScoreEntry{
    player;
    score;

}