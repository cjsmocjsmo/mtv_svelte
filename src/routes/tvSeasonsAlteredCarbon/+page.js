export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/scifi/alteredcarbon/01');
    const season1 = await res.json();

    const res2 = await fetch('http://192.168.0.94:8080/scifi/alteredcarbon/02');
    const season2 = await res2.json();

    let zoo = (season1, season2)

return { zoo }

}