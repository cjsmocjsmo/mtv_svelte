
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/starwars/andor/01'
    const res = await fetch(addr);
    const andor = await res.json();

return { andor }
}