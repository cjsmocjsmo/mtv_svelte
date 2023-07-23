import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'moonknight/01';
    const res = await fetch(addr);
    const moonknight = await res.json();

return { moonknight }
}