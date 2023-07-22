export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/scifi/halo/01');
    const halo = await res.json();

return { halo }
}