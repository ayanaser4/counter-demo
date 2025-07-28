import { NextResponse } from "next/server";


export async function POST(request: Request) {
    try {
        const body = await request.json();
        const counter = body.counter;
        const newCounter = Number.parseInt(counter) - 1;
        return NextResponse.json({ counter: newCounter })
    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({ message: error?.message }, { status: 400 })
        } else {
            return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
        }
    }
}

