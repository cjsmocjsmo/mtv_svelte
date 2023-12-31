
export async function load({ fetch }) {

    let s1 = 'http://192.168.0.94:8080/startrek/strangenewworlds/01';
    let s2 = 'http://192.168.0.94:8080/startrek/strangenewworlds/02';
    let s3 = 'http://192.168.0.94:8080/startrek/strangenewworlds/03';

    const res = await fetch(s1);
    const season1 = await res.json();

    const res2 = await fetch(s2);
    const season2 = await res2.json();

    const res3 = await fetch(s3);
    const season3 = await res3.json();

    let newworlds = [season1, season2, season3];

    return { newworlds }
}