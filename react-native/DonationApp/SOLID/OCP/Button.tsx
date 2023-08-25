import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from 'react-icons/hi';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  role?: 'back' | 'forward' | 'main' | 'not-found';
  icon?: React.ReactNode;
}

export function Button(props: IButtonProps) {
  const {text, role, icon} = props;

  return (
    <button
      className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
      {...props}>
      {text}
      <div className="m-2">
        {/*

        KALAU ROLE NYA NAMBAH TERUS, IF ELSE NYA JUGA BAKALAN NAMBAH TERUS DI COMPONENT INI,
        UNTUK NENTUIN ICON APA YANG DIMUNCULIN
        JADI KONSEP OCP NYA ENGK TERPENUHI.

        SOLUSI NYA,
        DARIPADA BIKIN IF ELSE BARU,
        LEBIH BAIK COMPONENT BUTTON BISA NERIMA PROPS UNTUK NENTUIN ICON NYA SENDIRI
        ,(DI PASSING DARI INDEX.TSX)

        */}

        {/* {role === "forward" && <HiOutlineArrowNarrowRight />}
        {role === "back" && <HiOutlineArrowNarrowLeft />} */}
        {icon}
      </div>
    </button>
  );
}
