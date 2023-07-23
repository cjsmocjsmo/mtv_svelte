import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'secretinvasion/01';
    const res = await fetch(addr);
    const secretinvasion = await res.json();

return { secretinvasion }
}