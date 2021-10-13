export const onDragStart = (evt) => {
  evt.dataTransfer.setData(
    "text/plain",
    `${evt.currentTarget.id},${evt.currentTarget.classList[0]}`
  );
  evt.dataTransfer.effectAllowed = "move";
};

export const onDragEnter = (evt) => {
  evt.preventDefault();
  evt.dataTransfer.dropEffect = "move";
};

export const onDragLeave = (evt) => {
  let currentTarget = evt.currentTarget;
  let newTarget = evt.relatedTarget;
  if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
    return;
  evt.preventDefault();
};

export const onDragOver = (evt) => {
  evt.preventDefault();
  evt.dataTransfer.dropEffect = "move";
};
