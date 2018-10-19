const baseURL = 'http://localhost:3000/api/v1'

export class ListAdapter {

    static getLists() {
        return fetch(`${baseURL}/lists`).then(resp => resp.json())
    }

}

