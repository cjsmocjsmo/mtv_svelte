
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/startrek/discovery/01'
    let addr2 = 'http://192.168.0.94:3000/startrek/discovery/02'
    let addr3 = 'http://192.168.0.94:3000/startrek/discovery/03'
    let addr4 = 'http://192.168.0.94:3000/startrek/discovery/04'

    const res = await fetch(addr);
    const season1 = await res.json();

    const res2 = await fetch(addr2);
    const season2 = await res2.json();

    const res3 = await fetch(addr3);
    const season3 = await res3.json();

    const res4 = await fetch(addr4);
    const season4 = await res4.json();

    let discovery = [season1, season2, season3, season4]

return { discovery }
}