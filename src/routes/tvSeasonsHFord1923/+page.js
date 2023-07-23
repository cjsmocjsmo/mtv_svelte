import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + '/western/hford1923/01'
    const res = await fetch(addr);
    const ford = await res.json();

return { ford }
}