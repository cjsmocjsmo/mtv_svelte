
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/loki/01';
    const res = await fetch(addr);
    const loki = await res.json();

return { loki }
}