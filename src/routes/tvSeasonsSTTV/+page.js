
export async function load({ fetch }) {

    let s1 = 'http://192.168.0.94:8080/startrek/sttv/01';
    const res = await fetch(s1);
    const season1 = await res.json();
    let s2 = 'http://192.168.0.94:8080/startrek/sttv/02';
    const res2 = await fetch(s2);
    const season2 = await res2.json();
    let s3 = 'http://192.168.0.94:8080/startrek/sttv/03';
    const res3 = await fetch(s3);
    const season3 = await res3.json();

    let sttv = [season1, season2, season3];

    return { sttv }
}