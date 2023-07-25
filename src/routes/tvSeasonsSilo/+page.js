
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/scifi/silo/01';
    const res = await fetch(addr);
    const silo = await res.json();

    return { silo }
}