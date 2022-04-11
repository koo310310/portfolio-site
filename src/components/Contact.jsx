export const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact-contents">
          <h2>Contact</h2>
          <p className="descripstion">お問い合わせは下記フォームよりお願いします。</p>
          <form action="mailto:csm0s927@gmail.com" method="post">
            <label className="form-label">Name<input type="text" /></label>
            <label className="form-label">Email<input type="text" /></label>
            <label className="form-label">Message<textarea /></label>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};