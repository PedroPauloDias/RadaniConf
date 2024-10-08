
import HeroHeader from './../components/HeroHeader/index';
import ProdutosContainer from '../components/produtosContainer/index';
import CategoriasContainer from '../components/CategoriasContainer/index';
import BigBangContainer from '../components/BigBangContainer/index';
import LancamentoContainer from '../components/LancamentoContainer/index';
export default function Home() {



  return (
    <>
      <HeroHeader />
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10  ">
        <div className="inline-block max-w-lg text-center justify-center">
        </div>
        <CategoriasContainer />
        <ProdutosContainer />
        <LancamentoContainer/>
        <BigBangContainer />
      </section>
  </>
  );
}
