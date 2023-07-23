import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'starwars/visions/01';
    const res = await fetch(addr);
    const visions = await res.json();

    return { visions }
}