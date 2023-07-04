export const MasterHead = () => {
  return (
    <div className="flex items-center">
      <section className="w-fit mx-auto text-center">
        <h1 className="text-7xl font-mono font-bold uppercase">Olá!</h1>
        <h2 className="text-md font-semibold pt-6">
          Bem vindo ao centro de informações do{" "}
          <span className="text-red-500 dark:text-sky-500">LAPES</span>
        </h2>
        <p className="pt-3">
          Aqui vai estar reunidas todas as informações gerais e de projetos do
          LAPES
        </p>
      </section>
    </div>
  );
};
