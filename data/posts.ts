import { USERS } from './users'

export const POSTS = [
  {
    imageUrl:
      'https://images.pexels.com/photos/92248/pexels-photo-92248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[0].username,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].profilePicture,
    comments: [
      {
        username: 'thezaman',
        comment: 'This is amazing man!',
      },
      {
        username: 'codedbalam',
        comment: 'I wake up, I code, I go back to sleep!',
      },
    ],
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/4963919/pexels-photo-4963919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[1].username,
    likes: 4721,
    caption: 'Fresh greens from the brooks.',
    profile_picture: USERS[1].profilePicture,
    comments: [
      {
        username: 'prayingmedic',
        comment: 'That is how to start your day!',
      },
    ],
  },
  {
    imageUrl:
      'https://images.pexels.com/photos/8029710/pexels-photo-8029710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[2].username,
    likes: 6220,
    caption: 'Work hard, study hard.',
    profile_picture: USERS[2].profilePicture,
    comments: [
      {
        username: 'blessed',
        comment: 'You totally getting that job girl!',
      },
      {
        username: 'mattrix',
        comment: 'keep it up girl, you are definitly close!',
      },
    ],
  },
]
