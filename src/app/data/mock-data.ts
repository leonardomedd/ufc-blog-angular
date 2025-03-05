export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  photoCover: string;
  date: string;
  category: string;
}

export const mockArticles: Article[] = [
  {
    id: 1,
    title: "UFC 300: Charles Oliveira vs Justin Gaethje 2 Confirmado",
    description: "Duelo explosivo pelo título BMF é confirmado para o card histórico do UFC 300",
    content: `Em uma notícia que agitou o mundo do MMA, o UFC confirmou oficialmente a revanche entre Charles 'do Bronx' Oliveira e Justin Gaethje para o UFC 300. O combate, que promete ser uma das lutas mais esperadas do ano, será válido pelo título BMF.

    Na primeira luta entre os dois, realizada no UFC 274, Gaethje foi finalizado por Oliveira no primeiro round. Desde então, ambos os lutadores evoluíram significativamente, prometendo um espetáculo ainda maior para os fãs.`,
    photoCover: "https://i.ytimg.com/vi/YZUU5CJxFd4/maxresdefault.jpg",
    date: "2024-03-04",
    category: "Notícias"
  },
  {
    id: 2,
    title: "Islam Makhachev Mantém Cinturão em Luta Dominante",
    description: "Campeão dos leves mostra mais uma vez por que é considerado um dos melhores peso-por-peso",
    content: `Islam Makhachev provou novamente seu domínio na divisão dos leves com uma performance impressionante. O campeão demonstrou um arsenal completo, combinando sua luta agarrada característica com um striking cada vez mais apurado.`,
    photoCover: "https://cdn.onefc.com/wp-content/uploads/2022/10/Islam-Makhachev-UFC-900x506.jpg",
    date: "2024-03-03",
    category: "Resultados"
  },
  {
    id: 3,
    title: "Alex Poatan Prepara-se para Defender Título dos Meio-Pesados",
    description: "Brasileiro intensifica camp de treinos visando próxima defesa de cinturão",
    content: `Alex Poatan está em preparação intensa para sua próxima defesa de título. O brasileiro, que conquistou o cinturão de forma impressionante, busca consolidar seu reinado na divisão dos meio-pesados.`,
    photoCover: "https://cdn.onefc.com/wp-content/uploads/2024/01/Alex-Pereira-UFC-900x506.jpg",
    date: "2024-03-02",
    category: "Treinos"
  }
]; 