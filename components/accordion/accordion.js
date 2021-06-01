import { useRef } from 'react';

export default function Accordion({ children, id, isOpen }){
  const ref = useRef();
  const inlineStyle = 
    isOpen === id 
      ? { height: ref.current?.scrollHeight } 
      : { height: 0 };

  return (
    <div id={id} className={style.accordion} ref={ref} style={inlineStyle}>
      {children}
    </div>
  );
}

const style = {
  accordion: `overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600`,
};
