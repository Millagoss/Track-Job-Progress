export const scaleElement = (e) => {
  console.log(e.target);
  e.target.style.transform = 'scale(1.2)';
  e.target.style.transition = 'transform 6s cubic-bezier(.8,.4,.17,.58)';
};

export const deScaleElement = (e) => {
  console.log(e.target);
  e.target.style.transform = 'scale(1)';
  e.target.style.transition = 'transform 2s cubic-bezier(.8,.4,.17,.58)';
};
