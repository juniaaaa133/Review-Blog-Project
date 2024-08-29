
const Status = ({isOnline} : {isOnline : boolean}) => {
  return (
    <div className={`px-[12px] rounded-[20px] py-[3] main-f fontcl text-[13px] ${isOnline ? 'bf' : 'bs'}`}>{isOnline ? 'Online' : 'Offline'}</div>
  )
}

export default Status