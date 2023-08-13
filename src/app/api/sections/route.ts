import * as appService from "@/services/app.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const index = parseInt(searchParams.get("index") ?? '0');
        const count = parseInt(searchParams.get("count") ?? '0');

        const res = await appService.getSections(index, count);

        return NextResponse.json(res);
    } catch (error) {
        throw error;
    }
}