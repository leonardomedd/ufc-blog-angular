export interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
  photoCover: string;
  date: string;
  category: string;
}

export interface Comment {
  id: number;
  articleId: number;
  author: string;
  content: string;
  date: string;
  avatar: string;
}

export const mockComments: Comment[] = [
  {
    id: 1,
    articleId: 1,
    author: "Anderson Silva",
    content: "Essa revanche promete ser ainda melhor que a primeira luta! Charles vai mostrar porque é o maior finalizador da história do UFC.",
    date: "2024-03-04",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDD8UHlvuBRwXe3zyMv4h3k1QGNJNvXg_iPA&usqp=CAU"
  },
  {
    id: 2,
    articleId: 1,
    author: "José Aldo",
    content: "Gaethje está em outro nível desde que ganhou o cinturão BMF, mas o Oliveira também evoluiu muito. Vai ser guerra!",
    date: "2024-03-04",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8FHOoZ5_yDmYE9M8Gnwf1ylbPKYHv-KrOQ&usqp=CAU"
  },
  {
    id: 3,
    articleId: 2,
    author: "Khabib Nurmagomedov",
    content: "Islam está provando ser o campeão mais dominante da categoria. Ninguém consegue lidar com seu wrestling.",
    date: "2024-03-03",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3RMiEE6Aez6yRy7WPMn-eKrEE3uqJ2h7Cw&usqp=CAU"
  },
  {
    id: 4,
    articleId: 2,
    author: "Dustin Poirier",
    content: "O striking dele melhorou muito, está cada vez mais completo. Será difícil alguém tirar esse cinturão dele.",
    date: "2024-03-03",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7WQJ6KZWSiJ-RsH7DTcgbfGKvHd5JYwqow&usqp=CAU"
  },
  {
    id: 5,
    articleId: 3,
    author: "Glover Teixeira",
    content: "Poatan é um fenômeno! A divisão dos meio-pesados nunca teve um striker tão perigoso como ele.",
    date: "2024-03-02",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDPjqYNspyE4JBgsoM3uGBXQBE3-Ta0Qumew&usqp=CAU"
  },
  {
    id: 6,
    articleId: 3,
    author: "Jan Blachowicz",
    content: "A evolução dele no grappling é impressionante. Está se tornando um lutador muito completo.",
    date: "2024-03-02",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvx9FLnR4c-r_6EgHYjLJQrHFQHfE2zP_7Eg&usqp=CAU"
  }
];

export const mockArticles: Article[] = [
  {
    id: 1,
    title: "UFC 300: Charles Oliveira vs Justin Gaethje 2 Confirmado",
    description: "Duelo explosivo pelo título BMF é confirmado para o card histórico do UFC 300",
    content: `Em uma notícia que agitou o mundo do MMA, o UFC confirmou oficialmente a revanche entre Charles 'do Bronx' Oliveira e Justin Gaethje para o UFC 300. O combate, que promete ser uma das lutas mais esperadas do ano, será válido pelo título BMF.

    Na primeira luta entre os dois, realizada no UFC 274, Gaethje foi finalizado por Oliveira no primeiro round. Desde então, ambos os lutadores evoluíram significativamente, prometendo um espetáculo ainda maior para os fãs.`,
    photoCover: "https://tatame.com.br/wp-content/webp-express/webp-images/uploads/2023/07/justin-gaethje-charles-do-bronx.jpg.webp",
    date: "2024-03-04",
    category: "Notícias"
  },
  {
    id: 2,
    title: "Islam Makhachev Mantém Cinturão em Luta Dominante",
    description: "Campeão dos leves mostra mais uma vez por que é considerado um dos melhores peso-por-peso",
    content: `Islam Makhachev provou novamente seu domínio na divisão dos leves com uma performance impressionante. O campeão demonstrou um arsenal completo, combinando sua luta agarrada característica com um striking cada vez mais apurado.`,
    photoCover: "https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_lg/s3/2025-01/180125-hero-islam-makhachev-hero-ufc-311-GettyImages-2194652222.jpg?h=d1cb525d&itok=yuLSsZAh",
    date: "2024-03-03",
    category: "Resultados"
  },
  {
    id: 3,
    title: "Alex Poatan Prepara-se para Defender Título dos Meio-Pesados",
    description: "Brasileiro intensifica camp de treinos visando próxima defesa de cinturão",
    content: `Alex Poatan está em preparação intensa para sua próxima defesa de título. O brasileiro, que conquistou o cinturão de forma impressionante, busca consolidar seu reinado na divisão dos meio-pesados.`,
    photoCover: "https://i0.wp.com/www.superlutas.com.br/wp-content/uploads/2025/02/Alex-Poatan-em-entrada-para-evento-no-UFC%C2%B2.-Foto-Reproducao-Instagram-UFC-India-e1739386393709.jpg?w=1080&ssl=1",
    date: "2024-03-02",
    category: "Treinos"
  }
]; 