const url = new URL("https://rockpaperscissor-30d3e-default-rtdb.europe-west1.firebasedatabase.app/highscore.json")
export async function getAllHighScore(){
    return await fetch(url)
        .then(response => response.json())
        .catch(error => console.error(error));
}
export async function updateHighScore(highScore){
    const resp = await fetch(url, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(highScore)
    }).catch(error => console.error(error));
}

export async function deleteAllHighScore(){
    const resp = await fetch(url, {
        method: "DELETE",
    }).catch(error => console.error(error));

}