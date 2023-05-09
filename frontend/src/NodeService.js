export default class NodeService {
    getTreeTableNodes() {
        return fetch('/responses/treetablenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    }

    getTreeNodes() {
        return fetch('/responses/treenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    }
}
