
export async function load({ fetch }) {

    const addr = 'http://192.168.0.94:8080/eternalquon';
    const res = await fetch(addr);
    const movlist = await res.json();

    return { movlist }
}