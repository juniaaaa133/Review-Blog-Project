import React from 'react'

const EmailSent = () => {
  return (
    <div className={'w-full h-[100vh] flex flex-col gap-[20px] items-center justify-center'}>
<h2 className="sys-f fontcl2 text-[32px]">Mobocat</h2>
<p className="main-f fontcl text-[15px]">Email verification link has sent to gmail.</p>
<a href="https://mail.google.com/mail/u/0/#inbox" target='_blank' className="btn1 main-f text-[15px] trans">Go to email</a>
</div>
  )
}

export default EmailSent