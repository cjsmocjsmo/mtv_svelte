
export async function load({ fetch }) {

    let addr = 'http://192.168.0.74:3000/scifi/halo/01'
    const res = await fetch(addr);
    const halo = await res.json();

return { halo }
}