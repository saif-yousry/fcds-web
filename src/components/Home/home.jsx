import Hero from './Hero';
import StatsBar from './StatsBar';
import FeaturedServices from './FeaturedServices';
import UpcomingEvents from './UpcomingEvents';
import FeaturedNews from './FeaturedNews';
import QuickLinks from './QuickLinks';

const Home = () => {
  return (
    <main>
      <Hero />
      <StatsBar />
      <FeaturedServices />
      <UpcomingEvents />
      <FeaturedNews />
      <QuickLinks />
    </main>
  );
};

export default Home;
