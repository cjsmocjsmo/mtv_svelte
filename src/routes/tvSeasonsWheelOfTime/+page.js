
export async function load({ fetch }) {

    let s1addr = 'http://192.168.0.94:8080/fantasy/wheeloftime/01';
    const res = await fetch(s1addr);
    const s1 = await res.json();

    let s2addr = 'http://192.168.0.94:8080/fantasy/wheeloftime/02';
    const res2 = await fetch(s2addr);
    const s2 = await res2.json();

    let wheeloftime = [s1, s2];

    return { wheeloftime }
}