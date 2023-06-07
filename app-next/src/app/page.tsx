import Caixa from "./components/caixa";

export default function Home() {
  return (
    <body>
      <div className="grid-template-rows-3">
        <div className="bg-purple-800 flex gap-5 p-7">
          <Caixa>Nélio</Caixa>
          <Caixa>Dias</Caixa>
          <Caixa>Santos</Caixa>
        </div>
      <footer className="fixed bottom-0 left-0 z-20 w-[100vw] bg-neutral-200 dark:bg-neutral-600">
        Footer
      </footer>
      </div>
    </body>


  )

}
