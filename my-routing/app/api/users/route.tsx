import { NextResponse } from "next/server";

// remember - every page request is a 'GET'
export async function GET() {
    // it is a really good idea to ALWAYS send a 'data' json top-level
    return NextResponse.json(
        {
            // any other page can then 'fetch' this data
            "data": [{ "name": "Freda" }, { "name": "Bertha" }, { "name": "Cerise" }]
        }
    )

}