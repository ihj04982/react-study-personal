import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topcis.length; i++) {
    let t = props.topcis[i];
    lis.push(
      <li key={t.id}>
        <a href={"/read/" + t.id}>{t.title}</a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "javascript", body: "javascript is ..." },
  ];
  return (
    <div>
      <Header title="React"></Header>
      <Nav topcis={topics}></Nav>
      <Article title="Welcome" body="Hello"></Article>
      <Article title="Heejeong" body="Lim"></Article>
    </div>
  );
}

export default App;
