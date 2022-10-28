'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Users');
  }
};

//Repare que ambas as funções recebem dois parâmetros: um é o queryInterface, e o outro é o Sequelize. Ambos os parâmetros são objetos que armazenam dados e operações. O queryInterface é usado pela biblioteca para modificar o banco de dados, seguindo o “dialeto” do banco que estamos utilizando. O objeto Sequelize armazena os tipos de dados disponíveis no contexto do banco, por exemplo varchar, string, integer, date etc.
