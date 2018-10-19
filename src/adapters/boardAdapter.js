const baseURL = 'http://localhost:3000/api/v1'

export class BoardAdapter {

    static getBoards() {
        return fetch(`${baseURL}/boards`).then(resp => resp.json())                     
    }

    static createBoard(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(`${baseURL}/boards`, options).then(resp => resp.json())
    }

}

