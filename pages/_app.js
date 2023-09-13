import '../assets/css/globals.css'
import { useRouter } from 'next/router';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { ModalProvider } from '../context/ModalContext'
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <RecoilRoot>
      <ModalProvider>
        <Component {...pageProps} key={router.asPath} />
      </ModalProvider>
    </RecoilRoot>
  )
}

export default MyApp