import { useState } from 'react';
import { ChevronRight } from 'lucide-react'


export default function FaqType({data}) {
  const[openFaqId, setOpenFaqId] = useState(null);

  function handleFaqClick (id) {
    openFaqId == id ? setOpenFaqId(null) : setOpenFaqId(id);  
  }

  return (
    <>
      {data.map((q_a, i) => (
        <div 
          key={i} 
          className={`flex flex-col gap-2 rounded-lg p-4 cursor-pointer
            ${q_a.id === openFaqId ? 'bg-light-primary/70' : 'bg-background/20 shadow-xs'}`}
          onClick={() => handleFaqClick(q_a.id)}
        >
          <div className='flex gap-2'>
            <ChevronRight 
              className={`text-primary/70 w-5 transition-all duration-200 
                ${q_a.id === openFaqId ? 'rotate-90' : 'rotate-0'}`} 
            /> 
            <h3 
              className={`text-sm font-semibold  
                ${q_a.id === openFaqId ? 'text-primary/80' : ''}`} 
            >
              {q_a.title}
            </h3>
          </div>

          <p 
            className={`text-muted font-normal transition-all duration-200 overflow-hidden pl-7 
              ${q_a.id === openFaqId ? 'max-h-20' : 'max-h-0 invisible'}`}
          >
            {q_a.details}
          </p>
        </div>
      ))}
    </>
  )
}