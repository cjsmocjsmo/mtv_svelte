
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:3000/hawkeye/01'
    console.log(addr)
    const res = await fetch(addr);
    const hawkeye = await res.json();

return { hawkeye }
}