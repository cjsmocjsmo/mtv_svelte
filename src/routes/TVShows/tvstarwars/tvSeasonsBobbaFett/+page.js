
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/starwars/bobafett/01'
    const res = await fetch(addr);
    const boba = await res.json();

return { boba }
}