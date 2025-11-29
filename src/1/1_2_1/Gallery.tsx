// 1_2_1 Split the components further - Updated Gallery to import Profile from separate file
import Profile from './Profile';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
    </section>
  );
}
