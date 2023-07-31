export async function load({ fetch }) {

    const addr = 'http://192.168.0.94:8080/setupcheck/now';
    const res = await fetch(addr);
    const setup_check = await res.json();
    // let setup_check = true;

    return { setup_check }
}