export default function Header() {
    return (
      <header>
        <nav className="main">
          <div className="left">
            <a href="/">STRATA</a>
          </div>
          <ul className="right">
            <li><span>&rarr;</span><a href="/built-environment">Built Env</a></li>
            <li><span>&rarr;</span><a href="/culture">Culture</a></li>
            <li><span>&rarr;</span><a href="/capital">Capital</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  