import { PUBLIC_MTV_BACKEND } from '$env/static/public'
export async function load({ fetch }) {

    let addr = PUBLIC_MTV_BACKEND + '/scifi/forallmankind/01'
    let addr2 = PUBLIC_MTV_BACKEND + '/scifi/forallmankind/02'
    let addr3 = PUBLIC_MTV_BACKEND + '/scifi/forallmankind/03'
    
    const res = await fetch(addr);
    const season1 = await res.json();

    const res2 = await fetch(addr2);
    const season2 = await res2.json();

    const res3 = await fetch(addr3);
    const season3 = await res3.json();

    let forallmankind = [season1, season2, season3]

return { forallmankind }
}