import React from 'react'

const ProfileInfo = ({onLogout}) => {
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>MS</div>
        <div>
            <p className='text-smfont-medium'> Manya Solanki

            </p>
            <button className='text-sm xt-slate-700 underline' onClick={onLogout}>
             Logout
            </button>
        </div>
    </div>
  )
}

export default ProfileInfo