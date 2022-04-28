import React from 'react'
import debounce from './ThrottleDebounce/debounce'
interface Props {
  state?: string;
}
function StatusState(props: {status: string}) {
  let status = props.status
  return (
    <div>page load has {status|| 'failed'}</div>
  )
}
;
export default StatusState;