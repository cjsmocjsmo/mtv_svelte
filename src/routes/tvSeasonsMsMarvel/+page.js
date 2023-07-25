
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/msmarvel/01';
    const res = await fetch(addr);
    const msmarvel = await res.json();

return { msmarvel }
}