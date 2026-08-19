

export default function StatusBar({color="bg-green-600", used="20%"}) {
  return (
    <div className='h-2 w-full bg-gray-200 rounded-full'>
      <div 
        style={{width: used}} 
        className={`h-full rounded-full ${color}`}
      >

      </div>
    </div>
  )
}
