import React from "react";

function Navbar() {
    return (<nav className="navbar is-transparent">
    <div className="navbar-brand">
      <a className="navbar-item" href="/l">
        <img src="https://github.com/UlyssesFigueroa/Footballadamus/blob/jorge/assets/images/Footballimage.png?raw=true" alt="Football: a modern CSS framework based on Flexbox" height="500"/>
      </a>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="https://bulma.io/">
          Home
        </a>
        <a className="navbar-item" href="https://bulma.io/">
          Chat
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="blank">
            Profile
          </a>
          <div className="navbar-dropdown is-boxed">
            <a className="navbar-item" href="blank">
              Games
            </a>
            <a className="navbar-item" href="blank">
              Friends
            </a>
            {/* <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
              Form
            </a> */}
            {/* <hr className="navbar-divider"/>
            <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
              Elements
            </a>
            <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
              Components
            </a> */}
          </div>
        </div>
      </div>
  
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              {/* <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <span>
                  Tweet
                </span>
              </a> */}
            </p>
            <p className="control">
              <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip">
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>SignUp</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>)
}

export default Navbar;