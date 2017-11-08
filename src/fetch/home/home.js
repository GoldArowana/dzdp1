import { get } from '../get'

export function getAdData() {
    const result = get('http://localhost:8090/api/22');
    return result
}

export function getListData(city, page) {
    const result = get('http://localhost:8090/api/homelist/' + encodeURIComponent(city) + '/' + page);
    return result
}