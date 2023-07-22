export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/starwars/bobafett/01');
    const boba = await res.json();

return { boba }
}