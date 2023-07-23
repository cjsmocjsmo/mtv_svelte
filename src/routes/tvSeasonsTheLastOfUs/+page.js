import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'thelastofus/01';
    console.log(addr);

    const res = await fetch(addr);
    const thelastofus = await res.json();

    return { thelastofus }
}