import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/candyTypes/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${settings.remoteURL}/candyTypes`).then(e => e.json())
    }
}