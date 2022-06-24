import {useId, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Avatar} from '@mui/material';

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
                    <p>Etan Heyman</p>
                    {/* איך נביא last active? */}
                    <p>Last active Today</p>
                </div>
            </div>
            <ul className='chat__currentRecipient__Buttons'>
                {actionList.map((action, i) => {
                    return (
                        <li key={i}>
                            <a href=''>
                                <FontAwesomeIcon style={{color: 'red'}} icon={action} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default CurrentRecipient;
