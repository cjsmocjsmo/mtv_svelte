export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/fantasy/houseofthedragon/01');
    const season1 = await res.json();

return { season1 }
}