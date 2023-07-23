import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'starwars/talesofthejedi/01';

    const res = await fetch(addr);
    const talesofthejedi = await res.json();

    return { talesofthejedi }
}