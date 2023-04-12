// import { useQuery } from "h3";

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    console.log(body.data)

    return event.res.end('Your email has been sent with succes')
});