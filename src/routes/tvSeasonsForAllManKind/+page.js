export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/scifi/forallmankind/01');
    const season1 = await res.json();

    const res2 = await fetch('http://192.168.0.94:8080/scifi/forallmankind/02');
    const season2 = await res2.json();

    const res3 = await fetch('http://192.168.0.94:8080/scifi/forallmankind/03');
    const season3 = await res3.json();

    let star = (season1, season2, season3)

return { star }
}