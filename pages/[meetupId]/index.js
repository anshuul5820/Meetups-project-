import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(context, props) {
  return (
    <MeetupDetail
      image='https://images.unsplash.com/photo-1617943133078-3ad4f4411aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
      address='ewrwrwe'
      title='first meetup'
      description='meetup description'
    />
  );
}

export async function getStaticPaths() {
  return { paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }], fallback: false };
}
//this is required if using below fn with dynamic routes
//paths- all routes for which site has to be pregenerated
//initially when below fn is called, meetupId is undefined, so it returns 404 page, but this case is handled by nextjs & error is shown.
//pregenerates for route m1 & m2
//!fallback--> this fn contains all possible meetup ids
//instead of hardcoding, the ids can be fetched from db
//fallback:t, generate some pages that are not mentined,f ex: most visited pages

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  //fetch data for single meetup
  return {
    props: {
      meetupData: {
        image:
          'https://images.unsplash.com/photo-1617943133078-3ad4f4411aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5zcGFsc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        address: 'THIS ADDRESS',
        title: 'first meetup',
        description: 'meetup description',
      },
    },
  };
}
//this needs id to get meetups data
//userouter cant be used here, not a component
//only getStaticProps, context doesnt have req, res

export default MeetupDetails;
