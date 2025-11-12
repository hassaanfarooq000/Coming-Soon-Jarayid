"use client"
import React, { useEffect, useRef, useState } from "react"

type Props = { children: React.ReactNode }

export default function FitToScreen({ children }: Props) {
    const contentRef = useRef<HTMLDivElement>(null)
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const updateScale = () => {
            const el = contentRef.current
            if (!el) return
            const contentWidth = el.scrollWidth || el.offsetWidth || 1
            const contentHeight = el.scrollHeight || el.offsetHeight || 1
            const vw = window.innerWidth
            const vh = window.innerHeight
            const raw = Math.min(vw / contentWidth, vh / contentHeight)
            const clamped = Math.max(0.75, Math.min(raw, 1))
            setScale(Number.isFinite(clamped) ? clamped : 1)
        }
        updateScale()
        window.addEventListener("resize", updateScale)
        return () => window.removeEventListener("resize", updateScale)
    }, [])

    return (
        <div className="fixed inset-0 overflow-auto bg-white">
            <div
                ref={contentRef}
                style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
                className="min-h-full"
            >
                {children}
            </div>
        </div>
    )
}

