export async function load({ fetch }) {
    
    const res = await fetch('http://192.168.0.26:8080/startrek/NextGeneration/01');
    const season1 = await res.json();

    const res2 = await fetch('http://192.168.0.26:8080/startrek/NextGeneration/02');
    const season2 = await res2.json();

    const res3 = await fetch('http://192.168.0.26:8080/startrek/NextGeneration/03');
    const season3 = await res3.json();

    const res4 = await fetch('http://192.168.0.26:8080/startrek/NextGeneration/04');
    const season4 = await res4.json();

    const res5 = await fetch('http://192.168.0.26:8080/startrek/NextGeneration/05');
    const season5 = await res5.json();

    const res6 = await fetch('http://192.168.0.26:8080/startrek/NextGeneration/06');
    const season6 = await res6.json();

    const res7 = await fetch('http://192.168.0.26:8080/startrek/NextGeneration/07');
    const season7 = await res7.json();

    let tng = [season1, season2, season3, season4, season5, season6, season7];


return { tng }
}