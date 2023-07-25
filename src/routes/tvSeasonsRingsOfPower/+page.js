
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/fantasy/ringsofpower/01';
    const res = await fetch(addr);
    const ringsofpower = await res.json();

return { ringsofpower }
}