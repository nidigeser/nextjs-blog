import Image from 'next/image'
import utilStyles from '../styles/utils.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className="img">
      <Image
              priority
              src="/images/profilepic.jpeg"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt=""
            />
      </div>
        <a href="/">Home</a>
        <a href="/blogs/blog">Blog</a>
        <a href="/about">About</a>
    </nav>
  );
}
 
export default Navbar;