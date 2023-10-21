
export async function load({ fetch }) {
    let addr = 'http://192.168.0.94:8080/thelastofus/01';
    const res = await fetch(addr);
    const thelastofus = await res.json();

    return { thelastofus }
}