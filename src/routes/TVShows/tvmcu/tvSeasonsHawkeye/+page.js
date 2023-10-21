
export async function load({ fetch }) {
    let addr = 'http://192.168.0.94:8080/hawkeye/01'
    const res = await fetch(addr);
    const hawkeye = await res.json();

return { hawkeye }
}