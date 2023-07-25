
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/secretinvasion/01';
    const res = await fetch(addr);
    const secretinvasion = await res.json();

return { secretinvasion }
}