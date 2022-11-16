"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
const utility_1 = require("../utils/utility");
const Register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, phone, password, confirm_password } = req.body;
        const validateResult = utility_1.registerSchema.validate(req.body, utility_1.option);
        if (validateResult.error) {
            // console.log(validateResult.error.details)
            return res.status(400).json({
                Error: validateResult.error.details[0].message
            });
        }
        // Generate salt
        const salt = yield (0, utility_1.GeneralSalt)();
        const userPassword = yield (0, utility_1.GeneratePassword)(password, salt);
        console.log(userPassword);
    }
    catch (error) {
        res.status(500).json({
            Error: "Internal server Error",
            route: "/users/signup"
        });
    }
});
exports.Register = Register;
