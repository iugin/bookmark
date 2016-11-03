module.exports = (sequelize, DataType) => {
    const Bookmarks = sequelize.define("Bookmarks", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        domain_id: {
            type: DataType.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    }, {
        classMethods: {
            associate: (models) => {
                Bookmarks.belongsTo(models.Domains);
            }
        }
    });
    return Tasks;
};