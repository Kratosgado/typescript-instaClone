import { USERS } from './users'

export const POSTS = [
  {
    postId: "sdfhw2343r",
    imageUrl:
      'https://i.postimg.cc/prkjHvjt/klynique.jpg',
    username: USERS[0].username,
    userId: USERS[0].id,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].profilePicture,
    comments: [
      {
        id: USERS[5].id,
        username: USERS[5].username,
        comment: 'This is amazing man!',
      },
      {
        id: USERS[1].id,
        username: USERS[1].username,
        comment: 'I wake up, I code, I go back to sleep!',
      },
    ],
  },
  {
    userId: USERS[1].id,
    postId: "slfhdsjr4352",
    imageUrl:
      'https://i.postimg.cc/8CRmLyhQ/photo-2023-07-26-09-46-45.jpg',
    username: USERS[1].username,
    likes: 4721,
    caption: 'Fresh greens from the brooks.',
    profile_picture: USERS[1].profilePicture,
    comments: [
      {
        id: USERS[7].id,
        username: USERS[7].username,
        comment: 'That is how to start your day!',
      },
      {
        id: USERS[5].id,
        username: USERS[5].username,
        comment: 'This is amazing man!',
      },
      {
        id: USERS[1].id,
        username: USERS[1].username,
        comment: 'I wake up, I code, I go back to sleep!',
      },
      {
        id: USERS[5].id,
        username: USERS[5].username,
        comment: 'This is amazing man!',
      },
      {
        id: USERS[1].id,
        username: USERS[1].username,
        comment: 'I wake up, I code, I go back to sleep!',
      },
    ],
  },
  {
    userId: USERS[2].id,
    postId: "ldshfwe98u9h",
    imageUrl:
      'https://i.postimg.cc/W3wgsXfB/Whats-App-Image-2023-07-26-at-9-31-07-AM.jpg',
    username: USERS[2].username,
    likes: 6220,
    caption: 'Work hard, study hard.',
    profile_picture: USERS[2].profilePicture,
    comments: [
      {
        id: USERS[2].id,
        username: USERS[2].username,
        comment: 'You totally getting that job girl!',
      },
      {
        id: USERS[4].id,
        username: USERS[4].username,
        comment: 'keep it up girl, you are definitly close!',
      },
    ],
  },
  {
    userId: USERS[5].id,
    postId: "dlfjds0weur90",
    imageUrl:
      'https://i.postimg.cc/Ls3QWKMf/Whats-App-Image-2023-07-26-at-10-24-10-AM.jpg',
    username: USERS[5].username,
    likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[5].profilePicture,
    comments: [
      {
        id: USERS[2].id,
        username: USERS[2].username,
        comment: 'This is amazing man!',
      },
      {
        id: USERS[5].id,
        username: USERS[5].username,
        comment: 'I wake up, I code, I go back to sleep!',
      },
    ],
  },
  {
    userId: USERS[4].id,
    postId: "dljfew9034",
    imageUrl:
      'https://i.postimg.cc/Ls3QWKMf/Whats-App-Image-2023-07-26-at-10-24-10-AM.jpg',
    username: USERS[4].username,
    likes: 4721,
    caption: 'Fresh greens from the brooks.',
    profile_picture: USERS[4].profilePicture,
    comments: [
      {
        id: USERS[5].id,
        username: USERS[5].username,
        comment: 'That is how to start your day!',
      },
    ],
  },
  {
    userId: USERS[3].id,
    postId: "jpsdofijsd932",
    imageUrl:
      'https://images.pexels.com/photos/8029710/pexels-photo-8029710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    username: USERS[3].username,
    likes: 6220,
    caption: 'Work hard, study hard.',
    profile_picture: USERS[3].profilePicture,
    comments: [
      {
        id: USERS[4].id,
        username: USERS[4].username,
        comment: 'You totally getting that job girl!',
      },
      {
        id: USERS[0].id,
        username: USERS[0].username,
        comment: 'keep it up girl, you are definitly close!',
      },
    ],
  },
]
