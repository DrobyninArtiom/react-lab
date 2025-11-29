// 1_3_1 Convert some HTML to JSX - Fixed JSX syntax: replaced class with className, self-closing tags with proper JSX syntax, and corrected nested tags order
export default function Bio() {
    return (
      <div className="intro">
        <h1>Welcome to my website!</h1>
        <p className="summary">
          You can find my thoughts here.
          <br /><br />
          <b>And <i>pictures</i></b> of scientists!
        </p>
      </div>
    );
  }