
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/starwars/obiwan/01';

    const res = await fetch(addr);
    const obiwan = await res.json();

return { obiwan }
}