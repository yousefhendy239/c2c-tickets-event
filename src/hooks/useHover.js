/* =========================================
   Hook: useHover
   Returns [hovered, hoverProps] — spread hoverProps onto any element
   ========================================= */
import { useState } from 'react';

const useHover = () => {
  const [hovered, setHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  return [hovered, hoverProps];
};

export default useHover;
