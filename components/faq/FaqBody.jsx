"use client"
import { useEffect, useState } from 'react'
import { faqData } from '@/data/statisticsData'
import FaqType from '@/components/faq/FaqType';
import { Icon } from '@iconify/react';
import ButtonPrimary from '@/components/ui/ButtonPrimary';

export default function FaqBody({ faqQuery }) {
  const[faqType, setFaqType] = useState(faqData[0]?.type);

  const filteredFaqData = faqData.map((catagory) => {
    const faqFiltered = catagory.faqs.filter(faq => {
      const queryTextLower = faqQuery.toLowerCase();

      return (
        faq.title.toLowerCase().includes(queryTextLower) || 
        faq.details.toLowerCase().includes(queryTextLower)
      );
    });

    return {
      ...catagory,
      faqs: faqFiltered,
    }
  }).filter(category => category.faqs.length > 0);

  
  function handleTypeClick (type) {
    setFaqType(type);
  }
  
  useEffect(() => {
    setFaqType(filteredFaqData[0]?.type);
  }, [filteredFaqData[0]?.type])

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 shadow-card rounded-lg bg-surface mt-4'>
        <div className='lg:col-span-3'>
          <div className='flex flex-col gap-2'>
            {filteredFaqData.map((faq, i) => (
              <div 
                key={i} 
                className={`relative text-foreground cursor-pointer px-4 py-2.5 
                  rounded-md overflow-hidden flex justify-between items-center
                  ${faq.type === faqType ? 'bg-primary/5 text-primary' : ''}`} 
                onClick={() => handleTypeClick(faq.type)}
              >
                <div 
                  className={`absolute bg-primary/80 left-0 inset-y-0 w-1 
                    ${faq.type !== faqType ? "hidden" : ""}`}
                >
                </div>
                <p className='text-inherit hover:text-primary tracking-wide font-semibold'>
                  {faq.type}
                </p>

                <div 
                  className={`size-6 flex items-center justify-center rounded-sm border border-gray-600/10 
                    ${faq.type === faqType ? 'border-primary/30 text-primary/80' : 'bg-background/80 text-muted'}`}
                >
                  <span className={`text-inherit text-xs font-semibold `}>{faq.faqs.length}</span>
                </div>
              </div>
            ))}
          </div> 

          {/* <div className='mt-4 p-5 bg-light-primary rounded-lg inline-flex flex-col gap-6'>
            <div className='flex gap-3'>
              <Icon className='text-primary' icon={"griddy-icons:support-filled"} width={42} />
              <div className='flex flex-col gap-2'>
                <p className='font-bold'>Still need help?</p>
                <p className='text-xs text-muted'>Our support team is here for you.</p>
              </div>
            </div>
            <div>
              <ButtonPrimary className="inline-flex items-center gap-2">
                Contact Support
                <Icon icon={"streamline-sharp:link-share-2-remix"} />
              </ButtonPrimary>
            </div>
          </div> */}
        </div>

        {filteredFaqData.map((item, i) => (
          <div 
            key={i} 
            className={`${item.type === faqType ? 'flex' : 'hidden'} lg:col-span-9 flex-col gap-1`}
          >
            <FaqType data={item.faqs} key={i}/>
          </div>
        ))}
      </div>
    </div>
  )
}