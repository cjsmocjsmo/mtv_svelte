
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/scifi/halo/01'
    const res = await fetch(addr);
    const halo = await res.json();

return { halo }
}