
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/thecontinental/01'
    const res = await fetch(addr);
    const continental = await res.json();

return { continental }
}