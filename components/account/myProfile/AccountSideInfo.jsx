

export default function AccountSideInfo() {
  return (
    <div className='col-span-3 p-5 bg-light-primary'>
      <div className='flex flex-col items-center gap-4 mt-10'>
        <div className='size-26 bg-primary flex items-center justify-center rounded-full'>
          <p className='font-semibold text-5xl text-white'>S</p>
        </div>
        <h2 className='font-semibold text-3xl'>User Name</h2>
        <p className='text-muted'>Member since May 1, 2024</p>

        <div className='flex items-center gap-2 bg-primary/10 px-3 text-primary/70 py-1 rounded-full'>
          <div className='size-2 rounded-full bg-success'></div>
          <span className='text-xs font-semibold'>Active Account</span>
        </div>
      </div>
    </div>
  )
}
