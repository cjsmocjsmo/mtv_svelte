
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/scifi/forallmankind/01'
    let addr2 = 'http://192.168.0.94:8080/scifi/forallmankind/02'
    let addr3 = 'http://192.168.0.94:8080/scifi/forallmankind/03'

    const res = await fetch(addr);
    const season1 = await res.json();

    const res2 = await fetch(addr2);
    const season2 = await res2.json();

    const res3 = await fetch(addr3);
    const season3 = await res3.json();

    let forallmankind = [season1, season2, season3]

return { forallmankind }
}