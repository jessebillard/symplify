const baseURL = 'http://localhost:3000/api/v1'

export class BoardAdapter {

    static getBoards() {
        return fetch(`${baseURL}/boards`).then(resp => resp.json())                      
    }

}

