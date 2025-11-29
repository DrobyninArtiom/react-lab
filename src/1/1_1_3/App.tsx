// 1_1_3 Spot the mistake - Fixed component name to start with uppercase letter as per React convention
function Profile() {
    return (
      <img
        src="AlanHart.jpg"
        alt="Alan L. Hart"
      />
    );
  }
   
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
