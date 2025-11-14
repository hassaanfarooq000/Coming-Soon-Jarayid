"use client"

export default function MainContent() {
    return (
        <main className="w-full mt-3 lg:mt-10">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 mb-3">
                {/* Flex layout for better alignment with header */}
                <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 items-start">
                    {/* Left: Video */}
                    <div className="relative w-full aspect-video lg:flex-1 lg:aspect-auto lg:h-[400px] xl:h-[460px] 2xl:h-[500px] rounded-[8px] overflow-hidden shadow-lg bg-gray-900">
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
                    <div className="flex flex-col w-full lg:w-[360px] xl:w-[380px] 2xl:w-[420px] lg:h-[400px] xl:h-[460px] 2xl:h-[500px] bg-white border border-[#B4BFCC] rounded-[8px] overflow-hidden">
                        <div className="flex items-center justify-end gap-2 px-3 pt-2.5 pb-2 w-full flex-shrink-0" dir="rtl">
                            <span className="text-sm lg:text-sm xl:text-base 2xl:text-lg font-bold text-gray-800">
                            — <bdi dir="ltr">Jarayid.com</bdi> &rlm;  المستقبل الجديد للصحافة العربية
                            </span>
                        </div>

                        <div className="flex-1 px-3 py-2.5 overflow-y-auto flex flex-col">
                            <div className="flex flex-col justify-between gap-2 text-right h-full" dir="rtl">
                                {/* Section 1 */}
                                <div
                                    dir="rtl"
                                    className="text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span className="block font-bold">
                                        <bdi dir="ltr">Jarayid.com</bdi>&rlm; يضع اللّمسات الأخيرة على أول تطبيقٍ وموقعٍ إخباري عربي مؤتمت بالكامل،
                                    </span>
                                    <span className="block">يعمل بالذكاء الاصطناعي <span className="font-bold">من دون أيّ تدخّلٍ بشري،</span></span>
                                    <span className="block">ليقدّم لكم تجربةً إخباريّة ذكيّة، سريعة، وشفّافة…</span>
                                </div>

                                {/* Section 2 */}
                                <div
                                    dir="rtl"
                                    className="text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span className="block">
                                        كلّ يوم، يجمع <bdi dir="ltr">Jarayid.com</bdi>&rlm; ويحلّل ويلخّص أكثر من عشرة آلاف خبرٍ من أكثرَ من 300 صحيفةٍ وموقعٍ عربيّ وعالميّ موثوق، ليقدّم لكم خلاصةَ الأخبار خلال ثوانٍ, بأسلوبٍ بسيط وسهل الفهم.
                                    </span>
                                    <span className="block">شعارُنا واضح:</span>
                                    <span className="block">اِقرأ أَقَلَّ, واِفهَم أَكثَر، عندما تُصبح الأخبار ذكيّة.</span>
                                </div>

                                {/* Section 3 */}
                                <div
                                    dir="rtl"
                                    className="text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span className="block">
                                        <bdi dir="ltr" className="font-bold">Jarayid.com</bdi>&rlm; قادمٌ إلى جَميعِ الدُّوَلِ العربيّةِ
                                    </span>
                                    <span className="block font-bold">
                                        لبنان، الإمارات، مصر، السعودية، المغرب، الجزائر، سوريا، العراق، ليبيا، الأردن، اليمن، فلسطين، الكويت، قطر، البحرين، وتونس،
                                    </span>
                                    <span className="block">
                                        <span className="font-bold">إضافةً إلى أقسامٍ متنوّعة تشمل: البثّ المباشر، الاقتصاد، الرياضة، التكنولوجيا، الصحّة، أخبار العالم، المجتمع، البرامج الحوارية، البودكاست,</span> <span className="font-bold">صوتُ</span> المجتمع,سجّل أنا عربي ونشرات <bdi dir="ltr">Jarayid AI</bdi>&rlm; الإخباريّة الذكيّة
                                    </span>
                                    <span className="block">
                                        — <bdi dir="ltr">Jarayid.com</bdi>&rlm; <span className="font-bold">متوفّر باللغتين العربية والإنجليزية</span>
                                    </span>
                                    <span className="block">ومجّاني بالكامل</span>
                                </div>

                                {/* Section 4 */}
                                <div
                                    dir="rtl"
                                    className="flex flex-col gap-1.5 text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span className="font-bold mb-1">مميّزات <bdi dir="ltr">Jarayid.com</bdi>&rlm;</span>
                                    <span>• مُيّزةُ تخصيصُ الأخبار: مع <bdi dir="ltr">Jarayid.com</bdi>&rlm; ، أنتَ من يحدّد شكلَ خدمتك الإخباريّة. تختار الدولة التي تُريد، وتُحدّد بنفسك الصحفَ والمواقعَ الموثوقة التي ترغب أن تصلك أخبارُها… لتصلك فقط الأخبار التي تَهُمُّكَ, تماماً كما لو أنّك صمّمتَ منصّتَك الإخباريّة الخاصّة</span>
                                    <span><span className="font-bold">• الإشعارات الذكية</span> — تُبقيك <bdi dir="ltr">Jarayid.com</bdi>&rlm; على تواصلٍ فوريّ</span>
                                    <span><span className="font-bold">• القارئ الذكي</span> — ميزة مبتكرة تتيح لك <span className="font-bold">الاستماع إلى أي خبرٍ صوتياً</span></span>
                                    <span>بصوتٍ ذكريّ أو أنثويّ، لتبقى على اطلاع حتى أثناء القيادة أو العمل أو الراحة.</span>
                                    <span>• ومع <bdi dir="ltr" className="font-bold">Jarayid.ai</bdi>&rlm;، استمتع <span className="font-bold">بنشراتٍ إخبارية يومية</span></span>
                                    <span>بصوتٍ وصورةٍ من إنتاج الذكاء الاصطناعي —</span>
                                    <span>تواكب الحدث فور وقوعه.</span>
                                </div>

                                {/* Section 5 */}
                                <div
                                    dir="rtl"
                                    className="flex flex-col gap-1.5 text-right text-[0.7rem] sm:text-[0.72rem] lg:text-[0.74rem] xl:text-[0.78rem] 2xl:text-[0.84rem] text-gray-700 leading-[1.55] xl:leading-relaxed"
                                >
                                    <span className="block">تابعونا على وسائل التواصل الاجتماعي</span>
                                    <span className="block">واشتركوا في قنواتنا الرسميّة عَلَى facebook, instagra, youtube, whatsapp,X, tiktok الموجودة في الزاوية العُليا من الصفحة 👆</span>
                                    <span className="block">كونوا أوّل من يَعْلَمُ موعد إطلاق <bdi dir="ltr">Jarayid.com</bdi>&rlm;</span>
                                    <span className="block">واستعدّوا لعصرٍ جديدٍ من الصحافة العربيّ</span>
                                    <span className="block"><bdi dir="ltr">Jarayid.com</bdi>&rlm; تعيد تعريف الصحافة الرقميّة في العالم العربي</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
