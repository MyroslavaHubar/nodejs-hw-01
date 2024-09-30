import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    const totalContacts = contacts.length;
    return totalContacts;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
