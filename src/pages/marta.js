export async function get() {
    let f1 = await fetch("http://labs.itsmarta.com/signpost/predictions");
    let f11 = await f1.text();
    return new Response(f11, {
        status: 200,
        statusText: "success"
    })
}