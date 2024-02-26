import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'

import Logo from '../../../public/logo-black.svg'

export default function Header(){

    return (
        <header className={styles.header__container}> 
            <div className={styles.logo}>
                <Link href={'/'}>
                    <Image src={Logo} alt="logo-black" width={20} height={21}/>
                    <p>VENTURE</p>
                </Link>
            </div>
            <div className={styles.nav__links}>
                <Link href={'/'}> Sign up </Link>
            </div>
        </header>
    )
}