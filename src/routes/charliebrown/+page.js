import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    const addr = PUBLIC_MTV_BACKEND + 'charliebrown';
    const res = await fetch(addr);
    const movlist = await res.json();

    return { movlist }
}