import {createClient} from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: "blog-next-rensyu",
    apiKey: process.env.API_KEY,
});

