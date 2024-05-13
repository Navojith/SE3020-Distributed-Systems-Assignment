import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
    readonly timestamp: Date;
    readonly amount: number;
    readonly status: string;
    readonly paymentMethod: string;
    readonly  paymentId: string;
    readonly  userId: string;
    readonly  courseId: string;
}