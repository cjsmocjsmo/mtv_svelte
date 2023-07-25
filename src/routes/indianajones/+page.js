
export async function load({ fetch }) {

    const addr = 'http://192.168.0.74:3000/indianajones';
    const res = await fetch(addr);
    const movlist = await res.json();

    return { movlist }
}