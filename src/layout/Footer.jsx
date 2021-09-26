function Footer() {
    return <footer className="footer">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">done by Denis</a>
      </div>
    </div>
  </footer>
}

export {Footer}