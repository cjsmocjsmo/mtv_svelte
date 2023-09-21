
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/comedy/fuubar/01'
    const res = await fetch(addr);
    const fuubar = await res.json();

return { fuubar }
}