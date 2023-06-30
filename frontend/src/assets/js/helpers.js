export function toURLName(string) {
    string = string.toLowerCase()
    const reemplazar = {
        ' - ': ' ',
        ' ': '-',
        '°': '',
        'á': 'a',
        'é': 'e',
        'í': 'i',
        'ó': 'o',
        'ú': 'u',
        'ñ': 'n',
    }

    for (let s in reemplazar) {
        string = string.replaceAll(s, reemplazar[s])
    }

    return string

}
