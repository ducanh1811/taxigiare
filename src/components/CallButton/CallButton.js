// import React from 'react';
// import classNames from 'classnames/bind';
// import styles from './CallButton.module.scss';
// import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
// import Link from 'next/link';
// import { Player } from '@lottiefiles/react-lottie-player';
// import animationData from '../../../public/call.json'; // Thay thế bằng đường dẫn đến file JSON của bạn

// const cx = classNames.bind(styles);

// const CallButton = () => {
//     return (
//         <div className={cx('wrapper')}>
//             <Link href="tel:0566814814">
//                 {/* <PermPhoneMsgIcon className={cx('icon')} /> */}
//                 <Player autoplay loop src={animationData} style={{ height: '300px', width: '300px' }}></Player>
//             </Link>
//         </div>
//     );
// };

// export default CallButton;

// src/components/CallButton/CallButton.js

'use client'; // Chỉ định đây là một Client Component

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../../../public/call.json'; // Đường dẫn đến file JSON của bạn
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import Link from 'next/link';
import classNames from 'classnames/bind';
import styles from './CallButton.module.scss'; // Đảm bảo đường dẫn đến file CSS đúng
import { SDT } from '@/constant/constant';
const cx = classNames.bind(styles);

const CallButton = () => {
    let sdt = 'tel:' + SDT;
    return (
        <div className={cx('wrapper', 'wrapper-mobile')}>
            <Link href={sdt}>
                {/* <PermPhoneMsgIcon /> */}
                <Player autoplay loop src={animationData} style={{ height: '150px', width: '150px' }} />
            </Link>
        </div>
    );
};

export default CallButton;
