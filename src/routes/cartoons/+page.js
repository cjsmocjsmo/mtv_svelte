
export async function load({ fetch }) {

    const addr = 'http://192.168.0.94:3000/cartoons';
    const res = await fetch(addr);
    const movlist = await res.json();

    return { movlist }
}