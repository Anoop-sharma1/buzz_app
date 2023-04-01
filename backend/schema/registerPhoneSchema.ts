import { Schema } from 'mongoose';
import { RegisterPhoneType } from '../types/registerPhoneTypes';

const registerPhoneSchema = new Schema<RegisterPhoneType>(
    {
        phoneNumber: {
            type: Number,
            required: [true, 'Phone number is required!'],
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

export default registerPhoneSchema;
