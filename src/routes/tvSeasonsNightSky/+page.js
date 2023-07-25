
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/scifi/nightsky/01';
    const res = await fetch(addr);
    const nightsky = await res.json();

return { nightsky }
}