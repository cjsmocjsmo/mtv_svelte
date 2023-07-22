export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.94:8080/foundation/01');
    const season1 = await res.json();

    const res2 = await fetch('http://192.168.0.94:8080/foundation/02');
    const season2 = await res2.json();

    let foundation = [season1, season2]
    // console.log(foundation)
    // console.log(foundation[0])
    // console.log(foundation[1])

return { foundation }
}