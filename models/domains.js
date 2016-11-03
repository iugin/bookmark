module.exports = (sequelize, DataType) => {
    const Domains = sequelize.define("Domains", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
                Domains.hasMany(models.Bookmarks);
            }
        }
    });
    return Tasks;
};