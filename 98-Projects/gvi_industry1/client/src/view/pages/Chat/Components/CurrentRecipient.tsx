import {useId, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Avatar} from '@mui/material';
import {ReactComponent as SearchMessages} from '../SearchMessages.svg';
import {ReactComponent as VideoIcon} from '../VideoIcon.svg';
import {ReactComponent as CallIcon} from '../CallIcon.svg';


import {IconLookup} from '@fortawesome/fontawesome-common-types';
interface CurrentRecipientProps {}
function CurrentRecipient(props: CurrentRecipientProps) {
    const [actionList, setActionList] = useState<Array<IconLookup>>([
        {prefix: 'fas', iconName: 'search'},
        {prefix: 'fas', iconName: 'phone'},
        {prefix: 'fas', iconName: 'video'},
    ]);

    const id = useId();
    return (
        <div className='chat__currentRecipient'>
            <div className='chat__currentRecipient__info'>
                <Avatar>EH</Avatar>
                <div className={`text` + id}>
                    <p id="e1">Etan Heyman</p>
                    {/* איך נביא last active? */}
                    <p id="e2">Last active Today</p>
                </div>
            </div>
            <ul className='chat__currentRecipient__Buttons'>
                <a href="">
<SearchMessages/>
<CallIcon/>
<VideoIcon/>
                </a>
                {/* {actionList.map((action, i) => {
                    return (
                        <li key={i}>
                            <a href=''>
                                <FontAwesomeIcon style={{color: 'red' ,width: '40px', height:'40px' }} icon={action} />

                            </a>
                        </li>
                    );
                })} */}
            </ul>
        </div>
    );
}

export default CurrentRecipient;
