
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/fantasy/houseofthedragon/01';
    const res = await fetch(addr);
    const houseofthedragon = await res.json();

return { houseofthedragon }
}