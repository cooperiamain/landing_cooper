import React from 'react';
import Link from 'next/link';

function FooterBar() {
    return (
        <div>
        <div className='container'>
            <div className="black_classic">Transforma la forma en que estudias y tomas apuntes. ¡No lo pienses más!</div>
        </div>
        <br />
        <br />
        <div className='container'>
            <Link
                href="https://tally.so/r/npdG81"
                type='button'
                className='balbini_btn'
            >
                <div>
                ¡Obtén acceso ahora!
                </div>
            </Link>
        </div>
        <div className='container_special'>
            <Link href="https://tally.so/r/npdG81" className="link-block-13 w-inline-block">
            <div className="dummy_text">© 2023 Cooper. Todos los derechos reservados.</div>
            </Link>
        </div>
        </div>
    );
}

export default FooterBar;