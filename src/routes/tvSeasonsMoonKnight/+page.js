
export async function load({ fetch }) {

    let addr = 'http://192.168.0.74:3000/moonknight/01';
    const res = await fetch(addr);
    const moonknight = await res.json();

return { moonknight }
}