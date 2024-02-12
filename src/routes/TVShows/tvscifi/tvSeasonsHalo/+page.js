
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/scifi/halo/01'
    const res = await fetch(addr);
    const halo1 = await res.json();

    let addr2 = 'http://192.168.0.94:8080/scifi/halo/02'
    const res2 = await fetch(addr2);
    const halo2 = await res2.json();

    const halo = [halo1, halo2]

return { halo }
}