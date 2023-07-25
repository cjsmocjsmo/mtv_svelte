
export async function load({ fetch }) {

    let addr = 'http://192.168.0.74:3000/starwars/andor/01'
    const res = await fetch(addr);
    const andor = await res.json();

return { andor }
}