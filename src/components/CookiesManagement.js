import { useContext, useState } from 'react';
import { Context } from './Context';

export default function CookiesManagement() {
    //const [showPopUp, setShowPopUp] = useState(true);
    //const [context, setContext] = useContext(Context);
    return (
        <div className='Cookie-container'>

            <div className='cookie-pop-up'>
                <div className='cookie-pop-up-header'>
                    <h3>Cookies</h3>
                    <button className='cookie-yes' >Yes</button>
                    <button className='cookie-no'>No</button>
                </div>
            </div >

        </div >
    )
}

