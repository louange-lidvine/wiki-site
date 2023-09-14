"use client"
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error])

    return (
        <main>
            <h2>something went wrong!</h2>
            <button onClick={() => reset()}>Try Again</button>
            <p className="text-xl">
                Or go back to
                <Link href="/" className="underline">
                    Home 🏡
                </Link>
            </p>
        </main>
    )
}