import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + 'foundation/01'
    let addr2 = PUBLIC_MTV_BACKEND + 'foundation/02'

    const res = await fetch(addr);
    const season1 = await res.json();

    const res2 = await fetch(addr2);
    const season2 = await res2.json();

    let foundation = [season1, season2]

return { foundation }
}