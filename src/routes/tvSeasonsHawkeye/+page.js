export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/hawkeye/01');
    const hawkeye = await res.json();

return { hawkeye }
}