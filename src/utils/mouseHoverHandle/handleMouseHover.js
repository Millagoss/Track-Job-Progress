export const handleHoverTransition = (e) => {
  e.target.style.transition = ' 0.4s ease-in-out all';
};

export const scaleElement = (e) => {
  e.target.style.transform = 'scale(1.2)';
  e.target.style.transition = 'transform 6s cubic-bezier(.8,.4,.17,.58)';
};

export const deScaleElement = (e) => {
  e.target.style.transform = 'scale(1)';
  e.target.style.transition = 'transform 2s cubic-bezier(.8,.4,.17,.58)';
};
