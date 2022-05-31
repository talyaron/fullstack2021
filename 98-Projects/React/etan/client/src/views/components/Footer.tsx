import { ReactComponent as AdChoices } from "../styles/adchoices.svg";
function Footer() {
  return (
    <div className="wrapper_footer-content">
      <div className="wrapper_footer-content-line1">
        <a href=""> English (UK) </a>
        <a href=""> Español </a>
        <a href=""> Français (France) </a>
        <a href=""> 中文(简体) </a>
        <a href=""> العربية </a>
        <a href=""> Português (Brasil) </a>
        <a href=""> Italiano </a>
        <a href=""> 한국어 </a>
        <a href=""> Deutsch </a>
        <a href=""> हिन्दी </a>
        <a href=""> 日本語</a>
      </div>
      <div className="wrapper_footer-buffer">
        <p>‎</p>
      </div>
      <div className="wrapper_footer-content-line2">
        <a href=""> Sing Up </a>
        <a href=""> Log In </a>
        <a href=""> Messenger </a>
        <a href=""> Facebook Lite </a>
        <a href=""> Watch </a>
        <a href=""> Places </a>
        <a href=""> Games </a>
        <a href=""> Marketplace </a>
        <a href=""> Facebook Pay </a>
        <a href=""> Oculus </a>
        <a href=""> Portal </a>
        <a href=""> Instagram </a>
        <a href=""> Bulletin </a>
        <a href=""> Local </a>
        <a href=""> Fundraisers </a>
        <a href=""> Services </a>
        <a href=""> Voting Information Centre </a>
        <a href=""> Groups </a>
        <a href=""> About </a>
        <a href=""> Create ad</a>
        <a href=""> Create Page </a>
        <a href=""> Developers </a>
        <a href=""> Careers </a>
        <a href=""> Privacy </a>
        <a href=""> Cookies </a>
        <a href="">
          Ad Choices
          <AdChoices />
        </a>
        <a href=""> Terms </a>
        <a href=""> Help </a>
      </div>
      <span>Meta © 2022</span>
    </div>
  );
}

export default Footer;
