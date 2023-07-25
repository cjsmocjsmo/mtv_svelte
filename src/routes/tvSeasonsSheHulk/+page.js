
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/shehulk/01';
    const res = await fetch(addr);
    const shehulk = await res.json();

    return { shehulk }
}