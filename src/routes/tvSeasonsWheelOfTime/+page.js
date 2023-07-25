
export async function load({ fetch }) {

    let addr = 'http://192.168.0.74:3000/fantasy/wheeloftime/01';
    const res = await fetch(addr);
    const wheeloftime = await res.json();

    return { wheeloftime }
}