
export async function load({ fetch }) {

    let addr1 = 'http://192.168.0.94:8080/iamgroot/01';
    let addr2 = 'http://192.168.0.94:8080/iamgroot/02';

    const res1 = await fetch(addr1);
    const iamgroot1 = await res1.json();

    const res2 = await fetch(addr2);
    const iamgroot2 = await res2.json();

return { iamgroot1, iamgroot2 }
}