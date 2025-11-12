
"use client"

export default function MainContent() {
    return (
        <main className="w-full mt-3 lg:mt-4">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 mb-3">
                <div className="w-full grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] xl:grid-cols-[2.8fr_1fr] 2xl:grid-cols-[3fr_1fr] gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 lg:items-stretch items-start">
                    {/* Left: Video */}
                    <div className="relative w-full min-h-[320px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[540px] 2xl:min-h-[580px] rounded-[8px] overflow-hidden shadow-lg bg-gray-900 pb-[56.25%]">
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

                    {/* Right: Text Content */}
                    <div className="flex flex-col w-full lg:w-[360px] xl:w-[380px] 2xl:w-[420px] h-auto lg:h-full bg-white border border-[#B4BFCC] rounded-[8px] lg:justify-self-end overflow-hidden min-h-[320px] sm:min-h-[360px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[540px] 2xl:min-h-[580px]">
                        <div className="flex items-center justify-end gap-2 px-3 pt-2.5 pb-2  border-gray-200 w-full flex-shrink-0">
                            <span className="text-sm lg:text-sm xl:text-base 2xl:text-lg font-bold text-gray-800">البرنامج النصي</span>
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

                                {/* Section 4 */}
                                <div
                                    dir="rtl"
                                    className="flex flex-col gap-1.5 text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span>🎙️ ومع <bdi dir="ltr">Jarayid.ai</bdi>&rlm;، استمتع بنشراتٍ إخباريّة يوميّة</span>
                                    <span>بصوتٍ وصورةٍ من إنتاج الذكاء الاصطناعي&nbsp;—</span>
                                    <span>تواكب الحدث فور وقوعه.</span>
                                    <span>💡 مجاني بالكامل&nbsp;—&nbsp;بلا حواجز…</span>
                                    <span>فقط أخبار دقيقة وسريعة، سهلة الفهم ومبسّطة.</span>
                                    <span>ذكي، سريع، ومجاني للجميع — <bdi dir="ltr">Jarayid.com</bdi>&rlm;</span>
                                    <span>تعيد تعريف الصحافة الرقميّة في العالم العربي <bdi dir="ltr">Jarayid.com</bdi>&rlm;</span>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}