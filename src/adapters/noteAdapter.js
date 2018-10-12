const baseURL = 'http://localhost:3000/api/v1'

export class NoteAdapter {

    static createNote(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        return fetch(`${baseURL}/notes`, options).then(resp => resp.json()).then((note) => console.log(note))
    }

}