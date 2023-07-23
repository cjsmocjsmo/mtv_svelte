import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'scifi/nightsky/01';
    const res = await fetch(addr);
    const nightsky = await res.json();

return { nightsky }
}