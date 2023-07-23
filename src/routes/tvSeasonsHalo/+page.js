import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + '/scifi/halo/01'
    const res = await fetch(addr);
    const halo = await res.json();

return { halo }
}