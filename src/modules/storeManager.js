import settings from "./settings"

export default {
    get(id) {
        return fetch(`${settings.remoteURL}/stores/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${settings.remoteURL}/stores`).then(e => e.json())
    }
}