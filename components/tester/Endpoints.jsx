export default function Endpoints({endPointsData, selectedEndpoint, setSelectedEndpoint}) {
  return (
    <div className="flex flex-col gap-1 mt-4">
      <label className="text-xs font-bold">Endpoint</label>
      <select 
        className="border border-border-gray px-2.5 py-2.5 rounded-md outline-none w-full" id="endpoint" 
        name="endpoint"
        value={selectedEndpoint}
        onChange={(e) => selectedEndpoint(e.target.value)}
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
  )
}

