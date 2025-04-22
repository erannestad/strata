export default function Header() {
    return (
      <header>
        <nav className="main">
          <div className="left">
            <a href="#events">Events</a>
          </div>
          <div className="center">
            <a href="#site">Site</a>
          </div>
          <ul className="right">
            {/* <li><span>&rarr;</span><a href="/built-environment">Screenings</a></li> */}
            <a href="#info">Info</a>
          </ul>
        </nav>
      </header>
    );
  }
  