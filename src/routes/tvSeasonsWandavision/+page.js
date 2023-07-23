import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {
    let addr = PUBLIC_MTV_BACKEND + 'superheros/wandavision/01';
    const res = await fetch(addr);
    const wandavision = await res.json();

    return { wandavision }
}