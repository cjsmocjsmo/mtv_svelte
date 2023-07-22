export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/scifi/nightsky/01');
    const nightsky = await res.json();

return { nightsky }
}