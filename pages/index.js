import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First meetup',
    image:
      'https://images.unsplash.com/photo-1617943133078-3ad4f4411aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    address: 'Address 1',
    description: 'meetup 1',
  },
  {
    id: 'm2',
    title: 'Second meetup',
    image:
      'https://media.istockphoto.com/photos/technological-map-background-picture-id1200200143?b=1&k=20&m=1200200143&s=170667a&w=0&h=5D4B3O02_VMV-Oh3Xbe2z_RR8ZDRLh2PUMsQ_cGhKh0=',
    address: 'Address 2',
    description: 'meetup 2',
  },
  {
    id: 'm3',
    title: 'Third meetup',
    image:
      'https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    address: 'Address 3',
    description: 'meetup 3',
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
