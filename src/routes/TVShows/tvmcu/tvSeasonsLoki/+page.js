
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/loki/01';
    let addr2 = 'http://192.168.0.94:8080/loki/02';

    const res = await fetch(addr);
    const loki = await res.json();

    const res2 = await fetch(addr2);
    const loki2 = await res2.json();

    let lokey= [loki, loki2]
return { lokey }
}