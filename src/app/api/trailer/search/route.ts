import { NextResponse } from "next/server";
import * as appService from "@/services/app.service";

export async function GET(request:Request) {
    try {
        const { searchParams } = new URL(request.url);

        const query = searchParams.get("query") as string;

        const res = await appService.searchTrailers(query);

        return NextResponse.json(res);
    } catch (error) {
        throw error;
    }
}