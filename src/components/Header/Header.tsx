import { Logo } from 'components/icons/Logo';
import { memo } from 'react';
import { Cart, User } from '../icons/index';

export const Header = memo(() => {
    return (
        <>
            <header className="header">
                <div className="header-left">
                    <ul>
                        <li>
                            <a href="" className="active">
                                Товары
                            </a>
                        </li>
                        <li>
                            <a href="">О нас</a>
                        </li>
                        <li>
                            <a href="">Доставка</a>
                        </li>
                    </ul>
                </div>
                <div className="header-center">
                    <span>
                        <Logo />
                    </span>
                </div>
                <div className="header-right">
                    <ul>
                        <li>
                            <a href="">Контакты</a>
                        </li>
                        <li>
                            <a href="">
                                <Cart size={25} />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <User size={25} />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
});
