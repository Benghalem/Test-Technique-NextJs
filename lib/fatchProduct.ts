import { ProductContent } from "@/typings/productTyping";

async function fatchProduct(url: string) {
    const username = process.env.OXYLABS_USERNAME;
    const password = process.env.OXYLABS_PASSWORD;

    const newUrl = new URL(`https://www.walmart.com${url}`);

    console.log("Scriping >>>>> ", newUrl.toString);

    const body = {
        source: 'universal_ecommerce',
        url: newUrl.toString(),
        geo_location: 'United States',
        parse: true
    };

    const response = await  fetch('https://realtime.oxylabs.io/v1/queries', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 
            'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
        },
        // caching des résultats
        next: { 
            revalidate: 60 * 60 * 24 // refrech the cache every 1 day
        },  
    })
    .then((res) => res.json())
    .then((data) => {
        if(data.results.length === 0) return ;
        const result: ProductContent = data.results[0];

        const product = result.content;

        return product

})
.catch((err) => console.error(err));


    return response 
}

export default fatchProduct