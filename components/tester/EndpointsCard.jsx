"use client"
import { useEffect, useState } from "react";
import { endPointsData } from "@/data/statisticsData";
import ParamsField from "@/components/tester/ParamsField";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Endpoints from "@/components/tester/Endpoints";
import InputField from "@/components/ui/InputField";
import { useForm } from "react-hook-form"
import { LoaderCircle } from "lucide-react";

export default function EndpointsCard({loading, setLoading, handleTesterCall, apikey, setApikey}) {

  const[selectedEndpoint, setSelectedEndpoint] = useState("status");
  const[endpointParams, setEndpointParams] = useState({});
  const { register, handleSubmit, reset } = useForm({});

  useEffect(() => {
    const selectedParams = endPointsData
      .flatMap(group => group.endpoints)
      .find(endpoint => endpoint.slug === selectedEndpoint);

    setEndpointParams(selectedParams);
    reset();
  }, [selectedEndpoint]);

  const handleFormSubmit = (data) => {
    // const queryString = new URLSearchParams(data).toString();
    const queryString = "";
    handleTesterCall(selectedEndpoint, queryString)
  }

  return (
    <div className="xl:col-span-4 bg-surface shadow-card rounded-lg border-border-gray overflow-hidden">
      <div className="bg-gray-500/10">
        <h3 className="text-base px-5 py-4">Requests</h3>
      </div>

      <div className="flex flex-col gap-4 p-5">
        <div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-foreground font-bold">Base URL</label>
            <select className="border border-gray-600/10 px-2.5 py-2.5 rounded-md outline-none w-full bg-gray-200/10 text-muted" id="base-url" name="base-url">
              <option value="https://v3.football.api-sports.io">https://v3.football.api-sports.io</option>
            </select>
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <label id="apikey" className="text-xs text-foreground font-bold">API Key</label>
            <InputField onChange={(e) => setApikey(e.target.value)} value={apikey}/>
          </div>

          <div className="flex flex-col gap-1 mt-4">
            <label className="text-xs text-foreground font-bold">Endpoint</label>
            <select 
              className="border border-border-gray px-2.5 py-2.5 rounded-md outline-none bg-gray-200/10 text-muted w-full" id="endpoint" 
              name="endpoint"
              value={selectedEndpoint}
              onChange={(e) => setSelectedEndpoint(e.target.value)}
            >
              {endPointsData.map((group) => (
                <optgroup label={group.label} key={group.id}>
                  {group.endpoints.map((endpoint) => (
                    <option 
                      key={endpoint.id}
                      className="text-muted" 
                      value={endpoint.slug}
                    >
                        {endpoint.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
          
        <form className="flex flex-col" onSubmit={handleSubmit(handleFormSubmit)}>
          <ParamsField 
            endpointParams={endpointParams} 
            register={register}
          />

          <ButtonPrimary type="submit">
            <div className="flex justify-center items-center gap-2">
              {loading && <LoaderCircle className="animate-spin" size={18}/> }
              <span>Submit</span>
            </div>
          </ButtonPrimary>
        </form>
      </div> 
    </div>
  )
}
