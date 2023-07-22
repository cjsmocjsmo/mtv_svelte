export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/starwars/andor/01');
    const andor = await res.json();
    console.log(andor)

return { andor }
}