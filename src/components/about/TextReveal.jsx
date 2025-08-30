import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
    children,
    scrollContainerRef,
    enableBlur = true,
    baseOpacity = 0.1,
    blurStrength = 4,
    containerClassName = "",
    textClassName = "",
    wordAnimationEnd = "bottom bottom",
    staggerAmount = 0.08, // waktu antar kata
    baseDelay = 0.2, // delay awal sebelum animasi mulai
}) => {
    const containerRef = useRef(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        return text.split(/(\s+)/).map((word, index) => {
            if (word.match(/^\s+$/)) return word;
            return (
                <span
                    className="inline-block word"
                    key={index}
                    style={{
                        opacity: 0, // mulai hidden
                        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
                    }}
                >
                    {word}
                </span>
            );
        });
    }, [children, enableBlur, blurStrength]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller =
            scrollContainerRef && scrollContainerRef.current
                ? scrollContainerRef.current
                : window;

        const wordElements = el.querySelectorAll('.word');

        gsap.to(wordElements, {
            opacity: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            stagger: staggerAmount, // kasih jarak antar kata
            delay: baseDelay, // delay awal sebelum animasi jalan
            scrollTrigger: {
                trigger: el,
                scroller,
                start: "top bottom-=20%",
                end: wordAnimationEnd,
                scrub: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [scrollContainerRef, enableBlur, baseOpacity, wordAnimationEnd, blurStrength, staggerAmount, baseDelay]);

    return (
        <h2 ref={containerRef} className={`my-5 px-4 ${containerClassName}`}>
            <p className={`text-[clamp(1rem,2.5vw,1.8rem)] leading-[1.6] font-medium ${textClassName}`}>
                {splitText}
            </p>
        </h2>
    );
};

export default ScrollReveal;
