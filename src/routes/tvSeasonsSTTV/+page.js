export async function load({ fetch }) {

    const res = await fetch('http://192.168.0.94:8080/startrek/sttv/01');
    const season1 = await res.json();

    const res2 = await fetch('http://192.168.0.94:8080/startrek/sttv/02');
    const season2 = await res2.json();

    const res3 = await fetch('http://192.168.0.94:8080/startrek/sttv/03');
    const season3 = await res3.json();

    let sttv = [season1, season2, season3];

    return { sttv }
}