export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.26:8080/starwars/andor/01');
    const season1 = await res.json();

return { season1 }
}