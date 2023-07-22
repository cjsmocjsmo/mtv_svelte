export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/scifi/cowboybebop/01');
    const bebop = await res.json();

return { bebop }
}