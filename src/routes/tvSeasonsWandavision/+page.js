
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/wandavision/01';
    const res = await fetch(addr);
    const wandavision = await res.json();

    return { wandavision }
}