"use client"

export default function MainContent() {
    return (
        <main className="w-full mt-6">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 items-start">
                    {/* Left: Video */}
                    <div className="relative w-full aspect-[900/566] lg:max-w-[950px]">
                        <div className="relative w-full h-full rounded-[10px] overflow-hidden shadow-lg bg-gray-900">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ&start_radio=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col w-full lg:w-[440px] xl:w-[440px] 2xl:w-[480px] h-auto lg:h-[420px] xl:h-[415px] 2xl:h-[525px] bg-white border border-[#B4BFCC] rounded-[10px] lg:justify-self-end overflow-hidden">
                        <div className="flex items-center justify-end gap-2 px-3 lg:px-3 xl:px-3 2xl:px-4 pt-3 lg:pt-2.5 xl:pt-2.5 2xl:pt-4 pb-2 2xl:pb-3 border-b border-gray-200 w-full flex-shrink-0">
                            <span className="text-base lg:text-base xl:text-lg 2xl:text-xl font-bold text-gray-800">البرنامج النصي</span>
                            <span className="text-pink-500 text-base lg:text-base xl:text-xl 2xl:text-xl">+</span>
                        </div>

                        <div className="flex-1 px-3 lg:px-2.5 xl:px-2.5 2xl:px-4 py-3 lg:py-2.5 xl:py-2.5 2xl:py-4 overflow-hidden">
                            <div className="flex flex-col gap-2.5 lg:gap-2 xl:gap-2 2xl:gap-3 text-right h-full" dir="rtl">
                                {/* Section 1 */}
                                <div className="text-sm lg:text-xs xl:text-base 2xl:text-base text-gray-700 leading-relaxed lg:leading-snug xl:leading-relaxed 2xl:leading-relaxed">
                                    <p>
                                        المستقبل الجديد للصحافة العربية - Jarayid.com
                                        يضع اللّمسات الأخيرة على أول تطبيقٍ وموقعٍ إخباري عربي مؤتمت بالكامل،يعمل بالذكاء الاصطناعي من دون أيِّ تدخّلٍ بشري،ليقدّم لكم تجربةً إخباريّة ذكيّة، سريعة،وشفّافة…- Jarayid.com

                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div className="text-sm lg:text-xs xl:text-base 2xl:text-base text-gray-700 leading-relaxed lg:leading-snug xl:leading-relaxed 2xl:leading-relaxed">
                                    <p>
                                        يجمع وتحليل ولتخصيص أكثر من 10,000 من أبرز المصادر العربية والعالمية الموثوقة. ليقدّمها لكم بأسلوب بسيط وواضح وسهل الفهم خلال ثوان.
                                        والعالمية الموثوقة. ليقدّمها لكم بأسلوب بسيط وواضح وسهل الفهم خلال ثوان.
                                    </p>
                                </div>

                                {/* Section 3 */}
                                <div className="text-sm lg:text-xs xl:text-base 2xl:text-base text-gray-700 leading-relaxed lg:leading-snug xl:leading-relaxed 2xl:leading-relaxed">
                                    <p>
                                        تغطي جميع دول العربية – لبنان، الإمارات، مصر، السعودية، المغرب، الجزائر، سوريا، العراق،
                                        لبنان، الأردن، فلسطين، الكويت، قطر، البحرين، وعمّان. إضافة إلى أقسام متنوعة تشمل: البث المباشر،
                                        الاقتصاد، الرياضة، التكنولوجيا، الصحة، أخبار العالم، الحوارات، البودكاست، واختياراتنا –
                                        متطّاق بالقنوات الرقمية والرسائل الذكية – تابع Jarayid.com على تواصل فوري. الاشتراكات الذكية – تابع
                                        على تواصل فوري لتتبع لك الاستماع إلى أي خبر صوتياً +
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}