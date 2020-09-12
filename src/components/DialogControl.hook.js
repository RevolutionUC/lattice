import { useState } from 'react';

export default function(defaultShow = false) {
  const [ show, setShow ] = useState(defaultShow);
  
  const open = () => setShow(true);
  const dismiss = () => setShow(false);

  return { show, open, dismiss };
};