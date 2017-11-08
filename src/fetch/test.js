import { get } from './get.js'

export function testFetch() {
    return get('http://localhost:8090/api/22')
}
