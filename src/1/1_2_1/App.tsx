// 1_2_1 Split the components further - Updated App to import both Profile and Gallery from separate files
import Profile from './Profile';
import Gallery from './Gallery';

export default function App() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}
