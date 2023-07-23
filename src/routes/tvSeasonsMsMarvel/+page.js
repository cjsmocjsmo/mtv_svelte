import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'msmarvel/01';
    const res = await fetch(addr);
    const msmarvel = await res.json();

return { msmarvel }
}