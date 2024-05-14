import {deleteAllHighScore, getAllHighScore, updateHighScore} from "./modules/highscoreRepository.js";

const seedData = [{"name":"Ada Lovelace", "score":5},
        {"name":"Ada Lovelace", "score":4},
        {"name":"Ada Lovelace", "score":3},
        {"name":"Ada Lovelace", "score":2},
        {"name":"Ada Lovelace", "score":1}];

await deleteAllHighScore()
await updateHighScore(seedData);