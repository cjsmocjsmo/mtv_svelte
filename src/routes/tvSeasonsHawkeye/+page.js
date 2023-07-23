import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'hawkeye/01'
    const res = await fetch(addr);
    const hawkeye = await res.json();

return { hawkeye }
}