export default function IdsTitle({sports, title}) {
  return (
    <div className="border-b border-b-border-gray-strong pb-4">
      <h2 className='text-xl mb-1 text-foreground'>{sports} {title}</h2>
      <p className='text-muted'>Browse and explore  all {sports} {title} ids</p>
    </div>
  )
}
