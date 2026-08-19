import InputField from '@/components/ui/InputField'
import { Fragment } from 'react'

export default function ParamsField({
  endpointParams,
  register
}) {
  return (
    <div>
      <div className="text-xs text-foreground font-bold">Parameters</div>
        <div className="p-4 pr-0 grid grid-cols-1 lg:grid-cols-[2fr_4fr] gap-2">
        {endpointParams?.params?.map((param) => (
          <Fragment key={param.id}>
            <label className="text-xs text-muted font-semibold">{param.name}</label>
            <InputField  {...register(param.name)}/>
          </Fragment>
        ))}
      </div>
    </div>
  )
}