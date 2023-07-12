import { useState } from "react";

const TextLimiter = ({ text, number = 100, color = 'var(--tertiary)' }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const temp = { color: color, whiteSpace: 'nowrap', cursor: 'pointer' }
    const [styles, setIsStyles] = useState(temp);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };


    return (
      <p className="text">
        {isReadMore ? text.slice(0, Number(number)) : text}
        <span style={styles} onClick={toggleReadMore} onMouseLeave={()=>setIsStyles(temp)} onMouseEnter={()=>setIsStyles({...styles, color: 'black'})} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  export default TextLimiter;