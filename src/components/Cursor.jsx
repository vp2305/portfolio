import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let rafId = null;
    let pendingX = -100;
    let pendingY = -100;
    let dirty = false;

    const onMove = (e) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!dirty) {
        dirty = true;
        rafId = requestAnimationFrame(commit);
      }
    };

    const commit = () => {
      dirty = false;
      const transform = `translate(${pendingX}px, ${pendingY}px) translate(-50%, -50%)`;
      cursor.style.transform = transform;
      dot.style.transform = transform;
    };

    const onOver = (e) => {
      const el = e.target;
      const interactive =
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.classList.contains('clickable') ||
        el.closest('[role="button"]') ||
        el.closest('.cursor-pointer');
      cursor.classList.toggle('hovering', !!interactive);
    };

    // Switch cursor to simple mode when modal is open (avoid mix-blend-mode compositing)
    const onModal = (e) => {
      if (e.detail.open) {
        cursor.style.mixBlendMode = 'normal';
        cursor.style.background = 'rgba(245, 158, 11, 0.7)';
        cursor.style.width = '10px';
        cursor.style.height = '10px';
        dot.style.display = 'none';
      } else {
        cursor.style.mixBlendMode = '';
        cursor.style.background = '';
        cursor.style.width = '';
        cursor.style.height = '';
        dot.style.display = '';
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('modal', onModal);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('modal', onModal);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor hidden md:block"
        style={{ left: 0, top: 0, transform: 'translate(-100px, -100px) translate(-50%, -50%)' }}
      />
      <div
        ref={dotRef}
        className="custom-cursor-dot hidden md:block"
        style={{ left: 0, top: 0, transform: 'translate(-100px, -100px) translate(-50%, -50%)' }}
      />
    </>
  );
};

export default Cursor;
