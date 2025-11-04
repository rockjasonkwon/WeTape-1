import NavbarHome from '../NavbarHome';
import Header from './header';
import Footer from './footer';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <NavbarHome />
      <Header />
      <Footer />
    </div>
  );
}
