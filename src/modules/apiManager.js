import settings from "./settings"

export default {
    get(item, id) {
        return fetch(`${settings.remoteURL}/${item}/${id}`).then(e => e.json())
    },
    getAll(item) {
        return fetch(`${settings.remoteURL}/${item}`).then(e => e.json())
    },
    removeAndList(item, id) {
        return fetch(`${settings.remoteURL}/${item}/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`${settings.remoteURL}/${item}`).then(e => e.json())
            )
    }
}