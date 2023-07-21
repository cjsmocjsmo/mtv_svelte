export const prerender = false;
export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/science/prehistoricplanet/01');
    const season1 = await res.json();

    const res2 = await fetch('http://192.168.0.94:8080/science/prehistoricplanet/02');
    const season2 = await res2.json();

    let prehistoricplanet = [season1, season2]

    console.log(prehistoricplanet)

return { prehistoricplanet }
}