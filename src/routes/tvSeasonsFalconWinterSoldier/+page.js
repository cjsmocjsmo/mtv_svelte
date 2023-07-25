
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/falconwintersoldier/01'
    const res = await fetch(addr);
    const falcon = await res.json();

return { falcon }
}