import { USERS } from './users'

export const POSTS = [
  {
    postId: "sdfhw2343r",
    imageUrl:
      'https://images.pexels.com/photos/92248/pexels-photo-92248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[0].username,
    userId: USERS[0].id,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].profilePicture,
    comments: [
      {
        id: 'user5',
        username: 'Kill Code',
        comment: 'This is amazing man!',
      },
      {
        id: 'user1',
        username: 'Kratos',
        comment: 'I wake up, I code, I go back to sleep!',
      },
    ],
  },
  {
    userId: USERS[1].id,
    postId: "slfhdsjr4352",
    imageUrl:
      'https://images.pexels.com/photos/4963919/pexels-photo-4963919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[1].username,
    likes: 4721,
    caption: 'Fresh greens from the brooks.',
    profile_picture: USERS[1].profilePicture,
    comments: [
      {
        id: 'user7',
        username: 'Kill it ',
        comment: 'That is how to start your day!',
      },
    ],
  },
  {
    userId: USERS[2].id,
    postId: "ldshfwe98u9h",
    imageUrl:
      'https://images.pexels.com/photos/8029710/pexels-photo-8029710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[2].username,
    likes: 6220,
    caption: 'Work hard, study hard.',
    profile_picture: USERS[2].profilePicture,
    comments: [
      {
        id: 'user2',
        username: 'Mbeah',
        comment: 'You totally getting that job girl!',
      },
      {
        id: 'user4',
        username: 'Jeffery',
        comment: 'keep it up girl, you are definitly close!',
      },
    ],
  },
  {
    userId: USERS[0].id,
    postId: "dlfjds0weur90",
    imageUrl:
      'https://images.pexels.com/photos/92248/pexels-photo-92248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[0].username,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].profilePicture,
    comments: [
      {
        id: 'user2',
        username: 'Mbeah',
        comment: 'This is amazing man!',
      },
      {
        id: 'user4',
        username: 'Jeffery',
        comment: 'I wake up, I code, I go back to sleep!',
      },
    ],
  },
  {
    userId: USERS[1].id,
    postId: "dljfew9034",
    imageUrl:
      'https://images.pexels.com/photos/4963919/pexels-photo-4963919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[1].username,
    likes: 4721,
    caption: 'Fresh greens from the brooks.',
    profile_picture: USERS[1].profilePicture,
    comments: [
      {
        id: 'user4',
        username: 'Jeffery',
        comment: 'That is how to start your day!',
      },
    ],
  },
  {
    userId: USERS[2].id,
    postId: "jpsdofijsd932",
    imageUrl:
      'https://images.pexels.com/photos/8029710/pexels-photo-8029710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[2].username,
    likes: 6220,
    caption: 'Work hard, study hard.',
    profile_picture: USERS[2].profilePicture,
    comments: [
      {
        id: 'user5',
        username: 'Kill Code',
        comment: 'You totally getting that job girl!',
      },
      {
        id: 'user7',
        username: 'Kill it ',
        comment: 'keep it up girl, you are definitly close!',
      },
    ],
  },
]
