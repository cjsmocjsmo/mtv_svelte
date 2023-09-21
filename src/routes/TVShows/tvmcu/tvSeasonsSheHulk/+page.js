
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/shehulk/01';
    const res = await fetch(addr);
    const shehulk = await res.json();

    return { shehulk }
}