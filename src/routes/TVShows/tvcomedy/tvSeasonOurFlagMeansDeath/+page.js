
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/ourflagmeansdeath/01'
    const res = await fetch(addr);
    const ourflagmeansdeath = await res.json();

return { ourflagmeansdeath }
}