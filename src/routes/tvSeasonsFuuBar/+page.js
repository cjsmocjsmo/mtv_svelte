import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'comedy/fuubar/01'
    const res = await fetch(addr);
    const fuubar = await res.json();

return { fuubar }
}