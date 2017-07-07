let idCounter = 20;
let data = {
  1: {
    id: 1,
    title: 'Today teaser date showed up in Orisa trailer.',
    description:
      '7 on the screen, 4 on the toolbox below. I might be reaching but I BELIEVE THIS.',
    created_at: new Date(2017, 1, 31),
    votes: 583,
  },
  2: {
    id: 2,
    title: 'The 45 sec time in Mystery Heroes mode is absurd.',
    description:
      'It has probably been said before, but it is worth repeating. In Mystery Heroes mode, your team has 45 seconds to assemble team, but whatever you choose, your selection is randomized immediately. Timer should be reduced to 5-10 seconds for that game mode.',
    created_at: new Date(2017, 1, 31),
    votes: 221,
  },
  3: {
    id: 3,
    title: 'Today we are likely to get a Doomfist teaser.',
    description:
      "Everything lines up. It's been more than 120 days since Orisa's debute, around this time Ana was released and it's the 4th of July. Today America celebrates the day they got their independence and I think it lines up perfectly with Overwatch. Right now Numbani is being attacked and still has to be freed from Doomfist. We are also supposed to be receiving season 2 of the Overwatch cinematics, I'm pretty sure we'll either get a teaser or a cinematic today.",
    created_at: new Date(2017, 1, 31),
    votes: 21,
  },
  4: {
    id: 4,
    title: 'Topic 4',
    description: `
      I've seen many posts recently making speculations on the recent blog article regarding one of the Doomfists breaking out of jail.
      I however haven't seen much regarding the following sentence of the article, which to me has huge teasing potential.
    `,
    created_at: new Date(2017, 1, 31),
    votes: 88,
  },
  5: {
    id: 5,
    title: 'Doomfist has come guys.',
    description:
      '7 on the screen, 4 on the toolbox below. I might be reaching but I BELIEVE THIS.',
    created_at: new Date(2017, 2, 25),
    votes: 4908,
  },
  6: {
    id: 6,
    title: 'Its official! Mystery Heroes is now in Arcade mode.',
    description:
      'It has probably been said before, but it is worth repeating. In Mystery Heroes mode, your team has 45 seconds to assemble team, but whatever you choose, your selection is randomized immediately. Timer should be reduced to 5-10 seconds for that game mode.',
    created_at: new Date(2017, 2, 25),
    votes: 223,
  },
  7: {
    id: 7,
    title: 'I have been working on several fanarts for Mercy',
    description:
      "Everything lines up. It's been more than 120 days since Orisa's debute, around this time Ana was released and it's the 4th of July. Today America celebrates the day they got their independence and I think it lines up perfectly with Overwatch. Right now Numbani is being attacked and still has to be freed from Doomfist. We are also supposed to be receiving season 2 of the Overwatch cinematics, I'm pretty sure we'll either get a teaser or a cinematic today.",
    created_at: new Date(2017, 2, 25),
    votes: 0,
  },
  8: {
    id: 8,
    title: 'Topic 8989',
    description: `
      I've seen many posts recently making speculations on the recent blog article regarding one of the Doomfists breaking out of jail.
      I however haven't seen much regarding the following sentence of the article, which to me has huge teasing potential.
    `,
    created_at: new Date(2017, 2, 28),
    votes: 6622,
  },
  9: {
    id: 9,
    title: 'How Reinhardt charge remains broken',
    description:
      '7 on the screen, 4 on the toolbox below. I might be reaching but I BELIEVE THIS.',
    created_at: new Date(2017, 2, 28),
    votes: 523,
  },
  10: {
    id: 10,
    title: 'j000m god tier Widow',
    description:
      'It has probably been said before, but it is worth repeating. In Mystery Heroes mode, your team has 45 seconds to assemble team, but whatever you choose, your selection is randomized immediately. Timer should be reduced to 5-10 seconds for that game mode.',
    created_at: new Date(2017, 3, 28),
    votes: 5543,
  },
  11: {
    id: 11,
    title: 'Today we are likely to get a Doomfist teaser.',
    description:
      "Everything lines up. It's been more than 120 days since Orisa's debute, around this time Ana was released and it's the 4th of July. Today America celebrates the day they got their independence and I think it lines up perfectly with Overwatch. Right now Numbani is being attacked and still has to be freed from Doomfist. We are also supposed to be receiving season 2 of the Overwatch cinematics, I'm pretty sure we'll either get a teaser or a cinematic today.",
    created_at: new Date(2017, 3, 28),
    votes: 552,
  },
  12: {
    id: 12,
    title: 'Topic 4',
    description: `
      I've seen many posts recently making speculations on the recent blog article regarding one of the Doomfists breaking out of jail.
      I however haven't seen much regarding the following sentence of the article, which to me has huge teasing potential.
    `,
    created_at: new Date(2017, 3, 20),
    votes: 5234,
  },
  13: {
    id: 13,
    title: 'Today teaser date showed up in Orisa trailer.',
    description:
      '7 on the screen, 4 on the toolbox below. I might be reaching but I BELIEVE THIS.',
    created_at: new Date(2017, 4, 20),
    votes: 1234,
  },
  14: {
    id: 14,
    title: 'The 45 sec time in Mystery Heroes mode is absurd.',
    description:
      'It has probably been said before, but it is worth repeating. In Mystery Heroes mode, your team has 45 seconds to assemble team, but whatever you choose, your selection is randomized immediately. Timer should be reduced to 5-10 seconds for that game mode.',
    created_at: new Date(2017, 4, 20),
    votes: 523,
  },
  15: {
    id: 15,
    title: 'Today we are likely to get a Doomfist teaser.',
    description:
      "Everything lines up. It's been more than 120 days since Orisa's debute, around this time Ana was released and it's the 4th of July. Today America celebrates the day they got their independence and I think it lines up perfectly with Overwatch. Right now Numbani is being attacked and still has to be freed from Doomfist. We are also supposed to be receiving season 2 of the Overwatch cinematics, I'm pretty sure we'll either get a teaser or a cinematic today.",
    created_at: new Date(2017, 4, 30),
    votes: 6623,
  },
  16: {
    id: 16,
    title: 'Topic 4',
    description: `
      I've seen many posts recently making speculations on the recent blog article regarding one of the Doomfists breaking out of jail.
      I however haven't seen much regarding the following sentence of the article, which to me has huge teasing potential.
    `,
    created_at: new Date(2017, 5, 18),
    votes: 5,
  },
  17: {
    id: 17,
    title: 'Today teaser date showed up in Orisa trailer.',
    description:
      '7 on the screen, 4 on the toolbox below. I might be reaching but I BELIEVE THIS.',
    created_at: new Date(2017, 5, 20),
    votes: 10,
  },
  18: {
    id: 18,
    title: 'The 45 sec time in Mystery Heroes mode is absurd.',
    description:
      'It has probably been said before, but it is worth repeating. In Mystery Heroes mode, your team has 45 seconds to assemble team, but whatever you choose, your selection is randomized immediately. Timer should be reduced to 5-10 seconds for that game mode.',
    created_at: new Date(2017, 5, 28),
    votes: 16,
  },
  19: {
    id: 19,
    title: 'How are you today?',
    description:
      "Everything lines up. It's been more than 120 days since Orisa's debute, around this time Ana was released and it's the 4th of July. Today America celebrates the day they got their independence and I think it lines up perfectly with Overwatch. Right now Numbani is being attacked and still has to be freed from Doomfist. We are also supposed to be receiving season 2 of the Overwatch cinematics, I'm pretty sure we'll either get a teaser or a cinematic today.",
    created_at: new Date(2017, 5, 29),
    votes: 71,
  },
  20: {
    id: 20,
    title: 'Topic 4',
    description: `
      I've seen many posts recently making speculations on the recent blog article regarding one of the Doomfists breaking out of jail.
      I however haven't seen much regarding the following sentence of the article, which to me has huge teasing potential.
    `,
    created_at: new Date(2017, 6, 1, 23),
    votes: 2,
  },
};

// Similar to index, there is a detail that is omitted.
export const getDataList = (page = 1, per_page = 20) => {
  const dataIds = Object.keys(data).sort((a, b) => b - a);
  const upper = Math.ceil(per_page / dataIds.length) + page - 1;
  const res = {};
  dataIds.slice((upper - 1) * per_page, upper * per_page).forEach(id => {
    res[id] = {
      ...data[id],
      description: undefined,
    };
  });

  return {
    topics: res,
    meta: {
      page,
      per_page,
      total: dataIds.length,
    },
  };
};

// Similar to show, more details are loaded here.
export const getData = id => {
  return data[id];
};

// Just push a new item into our data array.
export const create = form => {
  // Validate our data
  if (form.title.length > 255) {
    return {
      title: 'Title is too long!',
    };
  }

  idCounter++;
  data[idCounter] = {
    id: idCounter,
    title: form.title,
    description: form.description,
    created_at: new Date(),
    votes: 0,
  };

  // Success!
  return null;
};
