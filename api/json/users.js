const { User } = require('../src/db');
const bcrypt = require('bcrypt');

const usersMockUp = async () => {
  try {
    await User.create({
      userName: 'Juanito2',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Junito',
      lastName: 'Alimaña Navaja',
      phone: '+51 987654654',
      email: 'junito@gmail.com',
      address: 'Calle luna',
      roleId: 1,
      idPersonal: '87653221',
    });

    await User.create({
      userName: 'Leidy',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Leidy',
      lastName: 'Nuñes',
      phone: '+51 978654154',
      email: 'leidy@gmail.com',
      address: 'Calle luna',
      roleId: 2,
      idPersonal: '87653221',
    });

    await User.create({
      userName: 'Johannes',
      password: bcrypt.hashSync('12345', 10),
      firstName: 'Johannes',
      lastName: 'Gómez',
      phone: '+51 875454369',
      email: 'Johannes@gmail.com',
      address: 'Calle luna',
      roleId: 2,
      idPersonal: '87653221',
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = usersMockUp;