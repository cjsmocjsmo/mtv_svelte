
export async function load({ fetch }) {

    let addr = 'http://192.168.0.74:3000/starwars/badbatch/01'
    let addr2 = 'http://192.168.0.74:3000/starwars/badbatch/02'

    const res = await fetch(addr);
    const season1 = await res.json();

    const res2 = await fetch(addr2);
    const season2 = await res2.json();

    let badbatch = [season1, season2]

return { badbatch }
}