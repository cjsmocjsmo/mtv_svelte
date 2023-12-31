
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/foundation/01'
    let addr2 = 'http://192.168.0.94:8080/foundation/02'

    const res = await fetch(addr);
    const season1 = await res.json();

    const res2 = await fetch(addr2);
    const season2 = await res2.json();

    let foundation = [season1, season2]

return { foundation }
}