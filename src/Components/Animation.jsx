import {useRef, useEffect, useState } from 'react';
export default function ScrollAnimation({animation= 'fadeIn' , children, className= '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const [animateClass, setAnimateClass] = useState('');
    const [hasBeenObserved, setHasBeenObserved] = useState(false);
    useEffect(() => {
        const observer = new 
        IntersectionObserver(
            ([entry]) => {
                const el = ref.current;
                if (!el) return;
                setHasBeenObserved(true);
                if (entry.isIntersecting) {
                    setVisible(true);
                    setAnimateClass('');
                    requestAnimationFrame(() => {
                        setAnimateClass(`animate-${animation}`)
                    })
                }else {
                    setVisible(false)
                    setAnimateClass('')
                }
            },
            { threshold: 0.1 }
        );
        const el = ref.current
        if (el)
            observer.observe(el);
        return () => {
          if (el)  observer.unobserve(el);
        };
    },[animation]);
    const hiddenState = !visible && animation === 'slideInUp' ? 'translate-y-8 opacity-0': !visible ?'opacity-0' :'';
    return (
        <div ref={ref} className={`transition-all ${hasBeenObserved ? `${hiddenState} ${animateClass}`:''} ${className}`} >
            {children}
        </div>
    );
}