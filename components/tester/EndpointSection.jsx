"use client"
import EndpointsCard from '@/components/tester/EndpointsCard'
import ResponseCard from '@/components/tester/ResponseCard'
import { testerService } from '@/services/tester.service';
import { useState } from 'react'

export default function EndpointSection() {
  const[apiResponse, setApiResponse] = useState(null);
  const[loading, setLoading] = useState(false);
  const[apikey, setApikey] = useState("209cf59fb361d326a8a7dd8eb5ccd69a"); 
  const[baseUrl, setBaseUrl] = useState('https://v3.football.api-sports.io');
  const[fullUrl, setFullUrl] = useState(baseUrl);
  const[error, setError] = useState(null);
  
  const handleTesterCall = async (selectedEndpoint, queryString) => {
    const url = `${baseUrl}/${selectedEndpoint}?${queryString}`;
    setFullUrl(url);

    try{
      setLoading(true);
      const data = await testerService(url, apikey);
      setApiResponse(data)
    }catch(err){
        console.log(err)
        setError(err.message);
    }finally{
      setLoading(false);
    }
  }
  
  return (
    <section className='grid grid-cols-1 xl:grid-cols-12 gap-5 items-start'>
      <EndpointsCard 
        loading={loading} 
        setLoading={setLoading}
        setApiResponse={setApiResponse}
        apikey={apikey}
        setApikey={setApikey}
        handleTesterCall={handleTesterCall}
      />

      <ResponseCard 
        loading={loading}
        apiResponse={apiResponse}
        fullUrl={fullUrl}
      />
    </section>
  )
}
