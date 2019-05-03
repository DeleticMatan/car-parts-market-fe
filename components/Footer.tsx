import Link from 'next/link';

const Footer = () => {
  return (
    <footer style={{ marginBottom: '30px' }}>
      <p>
        <Link href="/">
          <a href="#">Delovi i oprema</a>
        </Link>{' '}
        ||{' '}
        <Link href="/gume">
          <a href="#">Gume</a>
        </Link>{' '}
        ||{' '}
        <Link href="/felne-i-ratkapne">
          <a href="#">Felne i ratkapne</a>
        </Link>
      </p>
      <p>
        Sadržaj sajta AutoDelovi.com zabranjen je za bilo kakvo kopiranje ili
        korišćenje u komercijalne svrhe osim za lične potrebe posetilaca sajta.
      </p>
      <p>Copyright © 2019 AutoDelovi.com</p>
    </footer>
  );
};

export default Footer;
