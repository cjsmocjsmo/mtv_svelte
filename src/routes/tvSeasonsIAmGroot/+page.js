
export async function load({ fetch }) {

    let addr = 'http://192.168.0.94:8080/iamgroot/01';
    const res = await fetch(addr);
    const iamgroot = await res.json();

return { iamgroot }
}