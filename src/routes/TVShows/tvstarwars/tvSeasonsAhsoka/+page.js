
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/starwars/ahsoka/01'

    const res = await fetch(addr);
    const season1 = await res.json();

    let ahsoka = [season1]

    return { ahsoka }

}