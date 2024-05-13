export class CreatePaymentDto {
    readonly timestamp: Date;
    readonly amount: number;
    readonly status: string;
    readonly paymentMethod: string;
    readonly  paymentId: string;
    readonly  userId: string;
    readonly  courseId: string;
}