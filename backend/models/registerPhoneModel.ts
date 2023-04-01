import { model } from 'mongoose';
import registerPhoneSchema from '../schema/registerPhoneSchema';
import { RegisterPhoneType } from '../types/registerPhoneTypes';

const RegisterPhoneModel = model<RegisterPhoneType>('RegisterPhone', registerPhoneSchema);

export default RegisterPhoneModel;
