import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'falconwintersoldier/01'
    const res = await fetch(addr);
    const falcon = await res.json();

return { falcon }
}