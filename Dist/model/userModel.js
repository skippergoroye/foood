"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInstance = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../config/index");
class UserInstance extends sequelize_1.Model {
}
exports.UserInstance = UserInstance;
UserInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: "Email address is not allowed to be empty"
            },
            isEmail: {
                msg: "please provide a valid email"
            }
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "password is required"
            },
            notEmpty: {
                msg: "provide a password"
            }
        }
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    salt: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "salt is required"
            }
        }
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "phonenumber is required"
            },
            notEmpty: {
                msg: "provide a phonenumber"
            }
        }
    },
    otp: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "otp is required"
            },
            notEmpty: {
                msg: "provide an otp"
            }
        }
    },
    otp_expiry: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                msg: "otp expired"
            },
        }
    },
    lng: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    lat: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    verified: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: {
                msg: "otp expired"
            }
        }
    }
}, {
    sequelize: index_1.db,
    tableName: "users",
});
