
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/hford1923/01'
    const res = await fetch(addr);
    const ford = await res.json();

return { ford }
}