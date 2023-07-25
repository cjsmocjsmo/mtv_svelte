
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/fantasy/houseofthedragon/01';
    const res = await fetch(addr);
    const houseofthedragon = await res.json();

return { houseofthedragon }
}