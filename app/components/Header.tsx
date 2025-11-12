

"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Libre_Caslon_Text, Inter } from "next/font/google"
import Link from 'next/link'

const libreCaslonText = Libre_Caslon_Text({
    subsets: ["latin"],
    weight: ["400", "700"],
})

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "600"],
})

// Social media icon components
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
)

const FacebookIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.99 17.0006C33.99 25.5867 27.6274 32.6849 19.3618 33.8368C18.5889 33.944 17.7982 34 16.9956 34C16.0691 34 15.1593 33.9261 14.2733 33.7832C6.18043 32.48 0 25.4616 0 17.0006C0 7.61167 7.60943 0 16.9944 0C26.3794 0 33.99 7.61167 33.99 17.0006Z" fill="#1877F2" />
        <path d="M19.3617 13.65V17.3533H23.9417L23.2165 22.342H19.3617V33.8358C18.5889 33.943 17.7982 33.999 16.9956 33.999C16.0691 33.999 15.1593 33.9251 14.2733 33.7822V22.342H10.0494V17.3533H14.2733V12.8221C14.2733 10.0109 16.5514 7.73096 19.3629 7.73096V7.73334C19.3713 7.73334 19.3784 7.73096 19.3868 7.73096H23.9429V12.0454H20.9658C20.081 12.0454 19.3629 12.7637 19.3629 13.6488L19.3617 13.65Z" fill="white" />
    </svg>
)

const InstagramIcon = () => (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.0337 0H16.9563C7.59159 0 0 7.59383 0 16.9613V17.0387C0 26.4062 7.59159 34 16.9563 34H17.0337C26.3984 34 33.99 26.4062 33.99 17.0387V16.9613C33.99 7.59383 26.3984 0 17.0337 0Z" fill="url(#paint0_linear_4001_4578)" />
        <path d="M22.2543 6.91699H11.7369C8.83124 6.91699 6.46744 9.2815 6.46744 12.188V21.8128C6.46744 24.7193 8.83124 27.0838 11.7369 27.0838H22.2543C25.16 27.0838 27.5238 24.7193 27.5238 21.8128V12.188C27.5238 9.2815 25.16 6.91699 22.2543 6.91699ZM8.32633 12.188C8.32633 10.3071 9.85655 8.77643 11.7369 8.77643H22.2543C24.1347 8.77643 25.6649 10.3071 25.6649 12.188V21.8128C25.6649 23.6936 24.1347 25.2243 22.2543 25.2243H11.7369C9.85655 25.2243 8.32633 23.6936 8.32633 21.8128V12.188Z" fill="white" />
        <path d="M16.9956 21.902C19.6976 21.902 21.8971 19.7031 21.8971 16.9991C21.8971 14.2951 19.6988 12.0962 16.9956 12.0962C14.2924 12.0962 12.0942 14.2951 12.0942 16.9991C12.0942 19.7031 14.2924 21.902 16.9956 21.902ZM16.9956 13.9568C18.6735 13.9568 20.0382 15.3219 20.0382 17.0003C20.0382 18.6787 18.6735 20.0438 16.9956 20.0438C15.3177 20.0438 13.953 18.6787 13.953 17.0003C13.953 15.3219 15.3177 13.9568 16.9956 13.9568Z" fill="white" />
        <path d="M22.3508 12.8886C23.0784 12.8886 23.6715 12.2966 23.6715 11.5676C23.6715 10.8386 23.0796 10.2466 22.3508 10.2466C21.622 10.2466 21.0302 10.8386 21.0302 11.5676C21.0302 12.2966 21.622 12.8886 22.3508 12.8886Z" fill="white" />
        <defs>
            <linearGradient id="paint0_linear_4001_4578" x1="4.96578" y1="29.0328" x2="29.0313" y2="4.97552" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FAAD4F" />
                <stop offset="0.35" stopColor="#DD2A7B" />
                <stop offset="0.62" stopColor="#9537B0" />
                <stop offset="1" stopColor="#515BD4" />
            </linearGradient>
        </defs>
    </svg>
)

const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
)

const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05 0-12.07z" />
    </svg>
)

const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-6.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
)

const socialLinks = [
    { name: 'WhatsApp', icon: WhatsAppIcon, bg: '#25D366', href: 'https://whatsapp.com/channel/0029VbBK3EaA89MjgYQW7n2t' },
    { name: 'Facebook', icon: FacebookIcon, bg: '#1877F2', href: 'https://www.facebook.com/jarayid' },
    { name: 'Instagram', icon: InstagramIcon, bg: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', href: 'https://www.instagram.com/jarayidnews' },
    { name: 'YouTube', icon: YouTubeIcon, bg: '#FF0000', href: 'https://www.youtube.com/@Jarayidcom-dg9yu' },
    { name: 'TikTok', icon: TikTokIcon, bg: '#000000', href: 'https://www.tiktok.com/@jarayid' },
    { name: 'X', icon: XIcon, bg: '#000000', href: 'https://x.com/AiArabicNews' },
]

type CountdownItemProps = { value: number; label: string }

const CountdownItem = ({ value, label }: CountdownItemProps) => (
    <div className="flex flex-col items-center justify-center flex-1 min-w-[70px] lg:min-w-[80px] px-3 sm:px-4 py-4 border-r border-white/20 last:border-r-0 last:pr-3 sm:last:pr-4">
        <div className="text-[28px] lg:text-[32px] font-bold text-white leading-none mb-1">
            {String(value).padStart(2, '0')}
        </div>
        <div className="text-sm font-medium text-white/80">
            {label}
        </div>
    </div>
)

// Countdown Timer Component
const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const targetDate = new Date('2025-11-16T00:00:00')

        const calculateTime = () => {
            const now = new Date().getTime()
            const distance = targetDate.getTime() - now

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                setIsReady(true)
                return
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            })
            setIsReady(true)
        }

        // Calculate immediately
        calculateTime()

        // Then update every second
        const timer = setInterval(calculateTime, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!isReady) {
        return (
            <div className="w-full lg:w-[360px] xl:w-[380px] 2xl:w-[420px] mt-3 flex flex-col items-center gap-3 text-center">
                <div className="w-full text-sm  font-medium text-center text-[#26292E]">
                    Jarayid.com بدأ العدّ التنازلي لإطلاق
                </div>
                <div className="relative isolate flex w-full h-[90px] lg:h-[96px] items-center justify-center overflow-hidden rounded-[12px] shadow-[0_0_8.6px_rgba(0,0,0,0.12)] bg-gray-200 animate-pulse">
                </div>
            </div>
        )
    }

    return (
        <div className="w-full lg:w-[360px] xl:w-[380px] 2xl:w-[420px] mt-3 flex flex-col items-center gap-3 text-center">
            <div className="w-full text-sm  font-medium text-center text-[#26292E]">
                Jarayid.com بدأ العدّ التنازلي لإطلاق
            </div>
            <div className="relative isolate flex w-full h-[90px] lg:h-[96px] items-stretch overflow-hidden rounded-[12px] shadow-[0_0_8.6px_rgba(0,0,0,0.12)]">
                <Image
                    src="/bg-1.png"
                    alt=""
                    fill
                    className="object-cover -z-10"
                    priority
                />
                <CountdownItem value={timeLeft.days} label="Days" />
                <CountdownItem value={timeLeft.hours} label="Hours" />
                <CountdownItem value={timeLeft.minutes} label="Minutes" />
                <div className="hidden lg:flex flex-1 border-r border-white/20 last:border-r-0">
                    <div className="flex flex-col items-center justify-center flex-1 min-w-[80px] px-4 py-4">
                        <div className="text-[32px] font-bold text-white leading-none mb-1">
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </div>
                        <div className="text-sm font-medium text-white/80">
                            Seconds
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function HeaderContent() {
    const logoHref = '/'

    return (
        <header className="w-full bg-white">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 mt-1 md:mt-6 lg:mt-8 pb-2">
                {/* Mobile/Tablet Header - Stacked Vertically */}
                <div className="flex lg:hidden flex-col items-center gap-4 md:gap-6">
                    {/* Logo & Coming Soon */}
                    <div className="flex flex-col items-center gap-2 w-full">
                        <Link href={logoHref} className="inline-block">
                            <h1 className={`text-[24px] sm:text-[28px] md:text-[32px] font-bold ${libreCaslonText.className} whitespace-nowrap`}>
                                <span className="text-black">Jarayid</span>
                                <span className="text-[#0866FF]">.com</span>
                            </h1>
                        </Link>
                        <div className={`text-center ${inter.className}`}>
                            <span className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-gray-800">Coming </span>
                            <span className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-pink-500">Soon</span>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="w-full max-w-md">
                        <CountdownTimer />
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center gap-3 w-full max-w-sm">
                        <div className="flex items-center gap-2.5 flex-wrap justify-center">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 shadow-sm"
                                    style={{ background: social.bg }}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                        <div className="text-center w-full">
                            <div className="text-sm md:text-base font-bold text-[#26292E] mb-2">تابعنا</div>
                            <div className="text-xs md:text-sm leading-relaxed text-[#26292E]">
                                تابعونا على وسائل التواصل الاجتماعي<br />
                                وكونوا أول من يعلم بالإطلاق<br />
                                Jarayid.com
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Header - Using Flex with Absolute Center */}
                <div className="hidden lg:flex lg:justify-between lg:items-start relative">
                    {/* Left: Social Media */}
                    <div className="flex flex-col items-center gap-3 w-full max-w-[240px] flex-shrink-0">
                        <div className="flex items-center gap-2.5 justify-center">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 shadow-sm"
                                    style={{ background: social.bg }}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                        <div className="text-center w-full">
                            <div className="text-base font-bold text-[#26292E] mb-3">تابعنا</div>
                            <div className="text-sm leading-relaxed text-[#26292E]">
                                تابعونا على وسائل التواصل الاجتماعي<br />
                                وكونوا أول من يعلم بالإطلاق<br />
                                Jarayid.com
                            </div>
                        </div>
                    </div>

                    {/* Center: Logo & Coming Soon - Absolutely Centered */}
                    <div className="absolute left-1/2 -translate-x-1/2 xl:-translate-x-[60%] flex flex-col items-center gap-2 mt-6">
                        <Link href={logoHref} className="inline-block">
                            <h1 className={`text-[32px] xl:text-[36px] font-bold ${libreCaslonText.className} whitespace-nowrap`}>
                                <span className="text-black">Jarayid</span>
                                <span className="text-[#0866FF]">.com</span>
                            </h1>
                        </Link>
                        <div className={`text-center mt-1 ${inter.className}`}>
                            <span className="text-[24px] xl:text-[26px] font-semibold text-gray-800">Coming </span>
                            <span className="text-[24px] xl:text-[26px] font-semibold text-red-500">Soon</span>
                        </div>
                    </div>

                    {/* Right: Countdown Timer */}
                    <div className="flex-shrink-0">
                        <CountdownTimer />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderContent