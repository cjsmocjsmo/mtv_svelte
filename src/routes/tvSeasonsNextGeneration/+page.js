
export async function load({ fetch }) {

    let addr = 'http://192.168.0.74:3000/startrek/tng/01';
    let addr2 = 'http://192.168.0.74:3000/startrek/tng/02';
    let addr3 = 'http://192.168.0.74:3000/startrek/tng/03';
    let addr4 = 'http://192.168.0.74:3000/startrek/tng/04';
    let addr5 = 'http://192.168.0.74:3000/startrek/tng/05';
    let addr6 = 'http://192.168.0.74:3000/startrek/tng/06';
    let addr7 = 'http://192.168.0.74:3000/startrek/tng/07';

    const res = await fetch(addr);
    const season1 = await res.json();

    const res2 = await fetch(addr2);
    const season2 = await res2.json();

    const res3 = await fetch(addr3);
    const season3 = await res3.json();

    const res4 = await fetch(addr4);
    const season4 = await res4.json();

    const res5 = await fetch(addr5);
    const season5 = await res5.json();

    const res6 = await fetch(addr6);
    const season6 = await res6.json();

    const res7 = await fetch(addr7);
    const season7 = await res7.json();

    let tng = [season1, season2, season3, season4, season5, season6, season7];


return { tng }
}