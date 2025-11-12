
"use client"

export default function MainContent() {
    return (
        <main className="w-full mt-3 lg:mt-4">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 lg:items-stretch items-start">
                    {/* Left: Video */}
                    <div className="relative w-full aspect-[900/566] lg:max-w-[780px] xl:max-w-[850px] 2xl:max-w-[950px]">
                        <div className="relative w-full h-full rounded-[8px] overflow-hidden shadow-lg bg-gray-900">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/ka3RnEKCwWM"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col w-full lg:w-[360px] xl:w-[380px] 2xl:w-[420px] lg:h-full h-auto bg-white border border-[#B4BFCC] rounded-[8px] lg:justify-self-end overflow-hidden">
                        <div className="flex items-center justify-end gap-2 px-3 pt-2.5 pb-2 border-b border-gray-200 w-full flex-shrink-0">
                            <span className="text-sm lg:text-sm xl:text-base 2xl:text-lg font-bold text-gray-800">البرنامج النصي</span>
                            <span className="text-pink-500 text-base lg:text-base xl:text-lg 2xl:text-xl">+</span>
                        </div>

                        <div className="flex-1 px-3 py-2.5 overflow-hidden flex flex-col">
                            <div className="flex flex-col justify-between gap-2 text-right h-full" dir="rtl">
                                {/* Section 1 */}
                                <div
                                    dir="rtl"
                                    className="text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span className="block">
                                        المستقبل الجديد للصحافة العربية — <bdi dir="ltr">Jarayid.com</bdi>&rlm;
                                    </span>
                                    <span className="block">
                                        يضع اللّمسات الأخيرة على أول تطبيقٍ وموقعٍ <bdi dir="ltr">Jarayid.com</bdi>&rlm;  إخباري عربي مؤتمت بالكامل،
                                    </span>
                                    <span className="block">يعمل بالذكاء الاصطناعي من دون أيّ تدخّلٍ بشري،</span>
                                    <span className="block">ليقدّم لكم تجربةً إخباريّة ذكيّة، سريعة، وشفّافة…</span>
                                </div>




                                {/* Section 2 */}
                                <div
                                    dir="rtl"
                                    className="text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span className="block">
                                        بجمـع وتحليل وتلخيص أكثر من <bdi dir="ltr">Jarayid.com</bdi>&rlm; كلّ يوم، يقوم
                                    </span>
                                    <span className="block">أكثر من 10,000 خبرٍ يومياً،</span>
                                    <span className="block">من أبرز المصادر العربية والعالمية الموثوقة،</span>
                                    <span className="block">ليقدّمها لكم بأسلوبٍ بسيطٍ وواضحٍ وسهلِ الفهم خلال ثوانٍ.</span>
                                </div>

                                {/* Section 3 */}
                                <div
                                    dir="rtl"
                                    className="text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span className="block">
                                        يُغَطّي جميعَ الدُّوَلِ العربيّة: <bdi dir="ltr">Jarayid.com</bdi>&rlm;
                                    </span>
                                    <span className="block">
                                        لبنان، الإمارات، مصر، السعودية، المغرب، الجزائر، سوريا، العراق، ليبيا، الأردن، اليمن، فلسطين، الكويت، قطر، البحرين،
                                        <span className="whitespace-nowrap"> وتونس،</span>
                                    </span>
                                    <span className="block">
                                        إضافةً إلى أقسامٍ متنوّعة تشمل: البثّ المباشر، الاقتصاد، الرياضة، التكنولوجيا، الصحّة، أخبار العالم، المجتمع، البرامج الحوارية، البودكاست، واختياراتنا.
                                    </span>
                                    <span className="block">
                                        متوفّر باللغتين العربية والإنجليزية — <bdi dir="ltr">Jarayid.com</bdi>&rlm;
                                    </span>
                                    <span className="block">ليقرب الخبر من كل قارئٍ ومُستمعٍ أينما كان.</span>
                                    <span className="block">
                                        الإشعارات الذكية — تُبقيك <bdi dir="ltr">Jarayid.com</bdi>&rlm; على تواصلٍ فوري
                                    </span>
                                    <span className="block">
                                    ✨ القارئ الذكي — ميزة مبتكرة تتيح لك الاستماع إلى أي خبرٍ صوتياً
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}