import ScrollButton from '../common/ScrollButton';
import ColBookCard from './../common/bookCards/ColBookCard';
function NewBook() {
  return (
    <>
      <section className="text-center relative w-[1920px] h-[670px] m-auto">
        <h2 className="text-dibBlack text-[40px] not-italic font-normal leading-[normal] tracking-[-1.5px] m-5">
          신규 도서
        </h2>
        <strong className="text-dibBlack text-[16px] not-italic font-normal">
          새롭게 소개하는 도서를 여기서 만나보세요!
        </strong>
        <div className="w-[1200px] mx-auto">
          <ul className="flex justify-center gap-6 my-10">
            <li>
              <ColBookCard />
            </li>
            <li>
              <ColBookCard />
            </li>
            <li>
              <ColBookCard />
            </li>
            <li>
              <ColBookCard />
            </li>
          </ul>
        </div>
        <div>
          <ScrollButton />
        </div>
      </section>
    </>
  );
}

export default NewBook;