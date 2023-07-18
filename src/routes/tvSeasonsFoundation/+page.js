export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.26:8080/scifi/foundation/01');
    const season1 = await res.json();

    const res2 = await fetch('http://192.168.0.26:8080/scifi/foundation/02');
    const season2 = await res2.json();

    let role = (season1, season2)

return { role }
}