import Image from 'next/image';
//
import Logo from '../../public/brand/qilo-logo-default.svg';

export default function QiloLogo() {
  return <Image src={Logo} alt="Qilo logo" />;
}
