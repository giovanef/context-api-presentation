type ArticleType = {
  title: string;
  text: string;
  links: string[]
}

type Props = {
  article: ArticleType;
}

const App = () => {
  const article = {
    title: 'título',
    text: 'conteúdo conteúdo conteúdo conteúdo conteúdo',
    links: ['link', 'link', 'link', 'link', 'link']
  };

  return (<Container article={article} />);
}

const Container = ({ article }: Props) => {
  return (
    <>
      <Content article={article} />
      <Sidebar article={article} /> 
    </>
  );
}

const Content = ({ article }: Props) => {
  return (
    <>
      <ContentTitle article={article} />
      <ContentText article={article} /> 
    </>
  );
}

const Sidebar = ({ article }: Props) => {
  return (
    <>
      {article.links.map((link) => (
        <div key={link}>{link}</div>
      ))}
    </>
  );
}

const ContentTitle = ({ article }: Props) => {
  return (
    <h1>{article.title}</h1>
  );
}
 
const ContentText = ({ article }: Props) => {
  return (
    <p>{article.text}</p>
  );
}
