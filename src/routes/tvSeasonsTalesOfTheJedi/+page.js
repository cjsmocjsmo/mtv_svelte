
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/starwars/talesofthejedi/01';

    const res = await fetch(addr);
    const talesofthejedi = await res.json();

    return { talesofthejedi }
}