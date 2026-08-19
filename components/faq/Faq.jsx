"use client"
import FaqBody from '@/components/faq/FaqBody'
import FaqHeader from '@/components/faq/FaqHeader'
import { useState } from 'react';

export default function Faq() {
  const [faqQuery, setFaqQuery] = useState('');

  return (
    <div>
      <FaqHeader setFaqQuery={setFaqQuery} />
      <FaqBody faqQuery={faqQuery} />
    </div>
  )
}
