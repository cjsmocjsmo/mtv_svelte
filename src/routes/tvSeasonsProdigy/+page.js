
export async function load({ fetch }) {

    let addr = 'http://192.168.0.74:3000/startrek/prodigy/01';
    const res = await fetch(addr);
    const prodigy = await res.json();

    return { prodigy }
}