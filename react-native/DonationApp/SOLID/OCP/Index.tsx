import {Button} from './button';
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from 'react-icons/hi';

export function OCP() {
  return (
    <div className="flex space-x-10">
      {/* 
        COMPONENT BUTTON SUDAH BISA MENERIMA PROPS ICON (COMPONENT) LANGSUNG,
        JADI KODINGAN DI BUTTON.TSX TIDAK PERLU BERUBAH LAGI

        - PERINSIP OPEN CLOSED PRINCIPLE
        FITUR BISA BERTAMBAH (EXTENDS), TAPI KODINGAN YANG SUDAH ADA TIDAK PERLU BERUBAH
      
      */}
      <Button
        text="Go Home"
        // role="forward"
        icon={<HiOutlineArrowNarrowRight />}
      />
      <Button
        text="Go Back"
        // role="back"
        icon={<HiOutlineArrowNarrowLeft />}
      />
    </div>
  );
}
