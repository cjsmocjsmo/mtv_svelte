export const prerender = false;
export async function load({ fetch }) {

    const res = await fetch('http://192.168.0.94:8080/thelastofus/01');
    const thelastofus = await res.json();

    return { thelastofus }
}