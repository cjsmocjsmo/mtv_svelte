import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + '/scifi/cowboybebop/01'
    const res = await fetch(addr);
    const bebop = await res.json();

return { bebop }
}