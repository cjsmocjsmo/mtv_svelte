import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'loki/01';
    const res = await fetch(addr);
    const loki = await res.json();

return { loki }
}